#!/usr/bin/env node
import { spawn } from 'child_process';
import { join } from 'path';

/**
 * Test script for MCP server stdio communication
 * This simulates how VS Code would communicate with the MCP server
 */

interface MCPRequest {
  jsonrpc: '2.0';
  id: number;
  method: string;
  params?: any;
}

interface MCPResponse {
  jsonrpc: '2.0';
  id: number;
  result?: any;
  error?: any;
}

class MCPStdioTester {
  private serverProcess: any;
  private requestId = 1;
  private pendingRequests = new Map<number, { resolve: Function; reject: Function }>();

  constructor() {
    console.log('🧪 Starting MCP stdio communication test...');
  }

  /**
   * Start the MCP server process
   */
  async startServer(): Promise<void> {
    return new Promise((resolve, reject) => {
      const serverPath = join(process.cwd(), 'dist', 'src', 'server.js');
      
      console.log(`🚀 Starting MCP server: node ${serverPath}`);
      
      this.serverProcess = spawn('node', [serverPath], {
        stdio: ['pipe', 'pipe', 'pipe'],
        cwd: process.cwd()
      });

      this.serverProcess.stdout.on('data', (data: Buffer) => {
        const lines = data.toString().split('\n').filter(line => line.trim());
        
        for (const line of lines) {
          try {
            // Try to parse as JSON-RPC response
            const response: MCPResponse = JSON.parse(line);
            this.handleResponse(response);
          } catch (error) {
            // Not JSON-RPC, probably server logs
            console.log(`📝 Server log: ${line}`);
          }
        }
      });

      this.serverProcess.stderr.on('data', (data: Buffer) => {
        console.error(`❌ Server error: ${data.toString()}`);
      });

      this.serverProcess.on('close', (code: number) => {
        console.log(`🔄 Server process exited with code ${code}`);
      });

      this.serverProcess.on('error', (error: Error) => {
        console.error(`❌ Failed to start server:`, error);
        reject(error);
      });

      // Wait a moment for server to start
      setTimeout(() => {
        console.log('✅ Server process started');
        resolve();
      }, 2000);
    });
  }

  /**
   * Handle JSON-RPC response from server
   */
  private handleResponse(response: MCPResponse): void {
    const pending = this.pendingRequests.get(response.id);
    if (pending) {
      this.pendingRequests.delete(response.id);
      if (response.error) {
        pending.reject(new Error(response.error.message || 'Unknown error'));
      } else {
        pending.resolve(response.result);
      }
    }
  }

  /**
   * Send a JSON-RPC request to the server
   */
  private async sendRequest(method: string, params?: any): Promise<any> {
    return new Promise((resolve, reject) => {
      const id = this.requestId++;
      const request: MCPRequest = {
        jsonrpc: '2.0',
        id,
        method,
        params
      };

      this.pendingRequests.set(id, { resolve, reject });

      const requestLine = JSON.stringify(request) + '\n';
      console.log(`📤 Sending request: ${method}`);
      
      this.serverProcess.stdin.write(requestLine);

      // Timeout after 10 seconds
      setTimeout(() => {
        if (this.pendingRequests.has(id)) {
          this.pendingRequests.delete(id);
          reject(new Error('Request timeout'));
        }
      }, 10000);
    });
  }

  /**
   * Initialize MCP session
   */
  async initialize(): Promise<void> {
    console.log('🔗 Initializing MCP session...');
    
    const result = await this.sendRequest('initialize', {
      protocolVersion: '2024-11-05',
      capabilities: {
        roots: {
          listChanged: false
        }
      },
      clientInfo: {
        name: 'mcp-stdio-tester',
        version: '1.0.0'
      }
    });

    console.log('✅ MCP session initialized:', result);
  }

  /**
   * Test health check tool
   */
  async testHealthCheck(): Promise<void> {
    console.log('🩺 Testing health check...');
    
    try {
      const result = await this.sendRequest('tools/call', {
        name: 'health_check',
        arguments: {}
      });

      console.log('✅ Health check result:', JSON.parse(result.content[0].text));
    } catch (error) {
      console.error('❌ Health check failed:', error);
    }
  }

  /**
   * Test component catalog tool
   */
  async testComponentCatalog(): Promise<void> {
    console.log('📚 Testing component catalog...');
    
    try {
      const result = await this.sendRequest('tools/call', {
        name: 'component_catalog',
        arguments: {
          category: 'all',
          type: 'all',
          include_tokens: false
        }
      });

      const catalog = JSON.parse(result.content[0].text);
      console.log('✅ Component catalog result:');
      console.log(`   - Total components: ${catalog.components?.length || 0}`);
      console.log(`   - Categories: ${catalog.categories?.join(', ') || 'None'}`);
    } catch (error) {
      console.error('❌ Component catalog failed:', error);
    }
  }

  /**
   * Test component generation tool
   */
  async testComponentGeneration(): Promise<void> {
    console.log('🛠️ Testing component generation...');
    
    try {
      const result = await this.sendRequest('tools/call', {
        name: 'component_generate',
        arguments: {
          spec: 'A simple card component with a title and content area',
          component_name: 'TestCard',
          include_styles: true,
          include_story: false
        }
      });

      const generation = JSON.parse(result.content[0].text);
      console.log('✅ Component generation result:');
      console.log(`   - Component file: ${generation.component?.fileName}`);
      console.log(`   - Styles file: ${generation.styles?.fileName || 'None'}`);
      console.log(`   - Tokens used: ${generation.design_tokens_used?.length || 0}`);
    } catch (error) {
      console.error('❌ Component generation failed:', error);
    }
  }

  /**
   * List available tools
   */
  async listTools(): Promise<void> {
    console.log('🔧 Listing available tools...');
    
    try {
      const result = await this.sendRequest('tools/list', {});
      console.log('✅ Available tools:');
      result.tools.forEach((tool: any) => {
        console.log(`   - ${tool.name}: ${tool.description}`);
      });
    } catch (error) {
      console.error('❌ Failed to list tools:', error);
    }
  }

  /**
   * Run all tests
   */
  async runTests(): Promise<void> {
    try {
      await this.startServer();
      await this.initialize();
      await this.listTools();
      await this.testHealthCheck();
      await this.testComponentCatalog();
      await this.testComponentGeneration();
      
      console.log('🎉 All tests completed!');
    } catch (error) {
      console.error('❌ Test suite failed:', error);
    } finally {
      this.cleanup();
    }
  }

  /**
   * Clean up resources
   */
  cleanup(): void {
    if (this.serverProcess) {
      console.log('🧹 Cleaning up server process...');
      this.serverProcess.kill();
    }
  }
}

// Run the tests
if (import.meta.url === `file://${process.argv[1]}`) {
  const tester = new MCPStdioTester();
  
  // Handle process termination
  process.on('SIGINT', () => {
    console.log('\n🛑 Received SIGINT, cleaning up...');
    tester.cleanup();
    process.exit(0);
  });
  
  process.on('SIGTERM', () => {
    console.log('\n🛑 Received SIGTERM, cleaning up...');
    tester.cleanup();
    process.exit(0);
  });
  
  tester.runTests().catch(console.error);
}

export { MCPStdioTester };