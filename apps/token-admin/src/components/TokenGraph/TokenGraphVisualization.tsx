'use client';

import React, { useCallback, useEffect, useMemo, memo } from 'react';
import {
  ReactFlow,
  Node,
  Edge,
  addEdge,
  Connection,
  useNodesState,
  useEdgesState,
  Controls,
  MiniMap,
  Background,
  BackgroundVariant,
  MarkerType,
  useReactFlow,
} from '@xyflow/react';
import dagre from 'dagre';
import * as d3 from 'd3-hierarchy';
import { TokenNode } from './TokenNode';
import { TokenGraphLegend } from './TokenGraphLegend';
import { TokenGraphControls } from './TokenGraphControls';
import '@xyflow/react/dist/style.css';

// Enhanced token interfaces for real data
interface EnhancedToken {
  id: string;
  path: string;
  name: string;
  value: string | number;
  type: string;
  description?: string;
  category: 'core' | 'semantic' | 'brand' | 'locale';
  subcategory?: string;
  source: string;
  brand?: string;
  locale?: string;
  references?: string[];
  referencedBy?: string[];
  isReference: boolean;
  originalPath: string;
}

interface TokenRelationship {
  source: string;
  target: string;
  type: 'reference' | 'override' | 'inheritance';
  strength: number;
}

// Updated interface to match the analyzer
interface AnalyzerRelationship {
  from: string;
  to: string;
  type: 'core-to-semantic' | 'semantic-to-brand' | 'semantic-to-semantic' | 'core-to-brand';
}

interface TokenAnalysis {
  nodes: any[];
  relationships: AnalyzerRelationship[];
  categories: {
    core: any[];
    semantic: any[];
    brand: any[];
    locale: any[];
  };
}

interface TokenGraphVisualizationProps {
  tokens: EnhancedToken[];
  analysis?: TokenAnalysis;
  searchTerm?: string;
  filterType?: 'all' | 'core' | 'semantic' | 'brand' | 'locale';
  selectedBrand?: string;
}

// Define custom node types with memo for performance
const nodeTypes = {
  tokenNode: memo(TokenNode),
};

// Performance optimization: Clustering function for large datasets
const clusterNodesByCategory = (nodes: Node[], maxNodesPerCluster = 50) => {
  const categories = new Map<string, Node[]>();
  
  nodes.forEach(node => {
    const category = node.data.category || 'unknown';
    if (!categories.has(category)) {
      categories.set(category, []);
    }
    categories.get(category)!.push(node);
  });

  const clusteredNodes: Node[] = [];
  
  categories.forEach((categoryNodes, category) => {
    if (categoryNodes.length <= maxNodesPerCluster) {
      clusteredNodes.push(...categoryNodes);
    } else {
      // Create cluster nodes for large categories
      const clusterCount = Math.ceil(categoryNodes.length / maxNodesPerCluster);
      for (let i = 0; i < clusterCount; i++) {
        const startIdx = i * maxNodesPerCluster;
        const endIdx = Math.min(startIdx + maxNodesPerCluster, categoryNodes.length);
        const clusterNodes = categoryNodes.slice(startIdx, endIdx);
        
        // Create a cluster representative node
        const clusterNode: Node = {
          id: `cluster-${category}-${i}`,
          type: 'tokenNode',
          position: { x: 0, y: 0 },
          data: {
            label: `${category} (${clusterNodes.length} tokens)`,
            value: `Cluster ${i + 1}`,
            type: category,
            category: 'cluster',
            color: getNodeColor(category as any),
            isCluster: true,
            clusterNodes: clusterNodes,
          },
        };
        
        clusteredNodes.push(clusterNode);
      }
    }
  });
  
  return clusteredNodes;
};

// Tree layout function for hierarchical visualization
const getTreeLayoutedElements = (nodes: Node[], edges: Edge[], direction = 'TB') => {
  // Build tree structure from nodes and edges
  const nodeMap = new Map(nodes.map(n => [n.id, n]));
  const childrenMap = new Map<string, string[]>();
  const parentMap = new Map<string, string>();
  
  // Build parent-child relationships
  edges.forEach(edge => {
    const parent = edge.source;
    const child = edge.target;
    
    if (!childrenMap.has(parent)) {
      childrenMap.set(parent, []);
    }
    childrenMap.get(parent)!.push(child);
    parentMap.set(child, parent);
  });
  
  // Find root nodes (nodes with no parents)
  const rootNodes = nodes.filter(n => !parentMap.has(n.id));
  
  // If no clear hierarchy, group by category
  if (rootNodes.length === 0 || rootNodes.length === nodes.length) {
    return getDagreLayoutedElements(nodes, edges, direction, false);
  }
  
  // Build tree data structure
  const treeData: TreeNode = {
    id: 'root',
    children: rootNodes.map(rootNode => buildTree(rootNode.id, nodeMap, childrenMap))
  };
  
  // Create D3 hierarchy
  const root = d3.hierarchy(treeData);
  
  // Configure tree layout
  const treeLayout = d3.tree<TreeNode>()
    .size([1000, 800])
    .separation((a: d3.HierarchyNode<TreeNode>, b: d3.HierarchyNode<TreeNode>) => {
      return a.parent === b.parent ? 1.5 : 2;
    });
  
  // Apply layout
  treeLayout(root);
  
  // Update node positions
  const layoutedNodes = nodes.map(node => {
    const treeNode = findTreeNode(root, node.id);
    if (treeNode) {
      return {
        ...node,
        position: {
          x: direction === 'TB' ? treeNode.x : treeNode.y,
          y: direction === 'TB' ? treeNode.y : treeNode.x
        },
        sourcePosition: direction === 'TB' ? 'bottom' : 'right',
        targetPosition: direction === 'TB' ? 'top' : 'left'
      };
    }
    return node;
  });
  
  return { nodes: layoutedNodes, edges };
};

interface TreeNode {
  id: string;
  data?: any;
  children?: TreeNode[];
}

// Helper function to build tree structure
const buildTree = (nodeId: string, nodeMap: Map<string, Node>, childrenMap: Map<string, string[]>): TreeNode => {
  const node = nodeMap.get(nodeId);
  const children = childrenMap.get(nodeId) || [];
  
  return {
    id: nodeId,
    data: node?.data,
    children: children.map(childId => buildTree(childId, nodeMap, childrenMap))
  };
};

// Helper function to find tree node by ID
const findTreeNode = (root: d3.HierarchyNode<TreeNode>, nodeId: string): d3.HierarchyNode<TreeNode> | null => {
  if (root.data?.id === nodeId) return root;
  
  if (root.children) {
    for (const child of root.children) {
      const found = findTreeNode(child, nodeId);
      if (found) return found;
    }
  }
  
  return null;
};

// Optimized dagre layout function with performance considerations
const getDagreLayoutedElements = (nodes: Node[], edges: Edge[], direction = 'TB', shouldCluster = false) => {
  let layoutNodes = nodes;
  
  // Apply clustering for performance if there are too many nodes
  if (shouldCluster && nodes.length > 300) {
    layoutNodes = clusterNodesByCategory(nodes, 50);
  }
  
  const dagreGraph = new dagre.graphlib.Graph();
  dagreGraph.setDefaultEdgeLabel(() => ({}));
  dagreGraph.setGraph({ 
    rankdir: direction,
    nodesep: 100, // Horizontal spacing
    ranksep: 150, // Vertical spacing
    marginx: 50,
    marginy: 50,
  });

  layoutNodes.forEach((node) => {
    dagreGraph.setNode(node.id, { width: 220, height: 100 });
  });

  // Only add edges between visible nodes
  const visibleNodeIds = new Set(layoutNodes.map(n => n.id));
  const filteredEdges = edges.filter(edge => 
    visibleNodeIds.has(edge.source) && visibleNodeIds.has(edge.target)
  );

  filteredEdges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  layoutNodes.forEach((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    if (nodeWithPosition) {
      node.targetPosition = 'top' as any;
      node.sourcePosition = 'bottom' as any;
      node.position = {
        x: nodeWithPosition.x - 110,
        y: nodeWithPosition.y - 50,
      };
    }
  });

  return { nodes: layoutNodes, edges: filteredEdges };
};

// Main layout function that chooses the appropriate algorithm
const getLayoutedElements = (nodes: Node[], edges: Edge[], direction = 'TB', shouldCluster = false, layoutType = 'dagre') => {
  switch (layoutType) {
    case 'tree':
      return getTreeLayoutedElements(nodes, edges, direction);
    case 'dagre':
    default:
      return getDagreLayoutedElements(nodes, edges, direction, shouldCluster);
  }
};

// Function to get node color based on token type
const getNodeColor = (type: string) => {
  switch (type) {
    case 'core':
      return '#3B82F6'; // Blue
    case 'semantic':
      return '#10B981'; // Green
    case 'brand':
      return '#8B5CF6'; // Purple
    case 'locale':
      return '#F59E0B'; // Orange
    default:
      return '#6B7280'; // Gray
  }
};

// Enhanced edge styling for different relationship types
const getEdgeStyle = (type: string) => {
  switch (type) {
    case 'reference':
      return { 
        stroke: '#3B82F6', 
        strokeWidth: 3,
        strokeDasharray: '0', // Solid line for references
      };
    case 'override':
      return { 
        stroke: '#EF4444', 
        strokeWidth: 4,
        strokeDasharray: '8,4', // Dashed line for overrides
      };
    case 'locale-override':
      return { 
        stroke: '#F59E0B', 
        strokeWidth: 3,
        strokeDasharray: '4,2', // Shorter dashes for locale overrides
      };
    case 'inheritance':
      return { 
        stroke: '#10B981', 
        strokeWidth: 3,
        strokeDasharray: '0',
      };
    default:
      return { 
        stroke: '#6B7280', 
        strokeWidth: 2,
        strokeDasharray: '0',
      };
  }
};

// Performance optimizations with memoization
export const TokenGraphVisualization: React.FC<TokenGraphVisualizationProps> = memo(({
  tokens,
  analysis,
  searchTerm = '',
  filterType = 'all',
  selectedBrand = 'common',
}) => {
  const [layout, setLayout] = React.useState<'dagre' | 'tree' | 'force'>('dagre');
  const [nodes, setNodes, onNodesChange] = useNodesState<Node[]>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge[]>([]);

  // Fixed relationship detection based on actual token structure
  const generateRelationships = useCallback((tokenList: EnhancedToken[]) => {
    const relationships: { source: string; target: string; type: string }[] = [];
    
    // Create comprehensive lookup maps
    const tokenMap = new Map<string, EnhancedToken>();
    const pathMap = new Map<string, EnhancedToken>();
    
    // Build lookup maps with better path matching
    tokenList.forEach(token => {
      tokenMap.set(token.id, token);
      
      // Add all possible path variations for better matching
      const pathVariations = [
        token.path,
        token.name,
        token.originalPath,
        // Remove category prefix if present (e.g., "color.gray.900" from "core:default:color.gray.900")
        token.path.replace(/^[^:]*:[^:]*:/, ''),
        // Simple name matching
        token.name.toLowerCase(),
        token.path.toLowerCase(),
      ].filter(Boolean);
      
      pathVariations.forEach(variation => {
        if (variation) {
          pathMap.set(variation, token);
        }
      });
    });
    
    console.log('🔍 Path map size:', pathMap.size);
    console.log('📝 Sample paths:', Array.from(pathMap.keys()).slice(0, 10));
    
    tokenList.forEach(token => {
      // Process existing references array (if available)
      if (token.references && token.references.length > 0) {
        token.references.forEach(ref => {
          const sourceToken = pathMap.get(ref);
          if (sourceToken && sourceToken.id !== token.id) {
            relationships.push({
              source: sourceToken.id,
              target: token.id,
              type: determineRelationshipType(sourceToken, token)
            });
            console.log('✅ Found reference:', ref, '->', token.path);
          }
        });
      }
      
      // Enhanced value-based reference detection
      if (typeof token.value === 'string' && token.value.includes('{') && token.value.includes('}')) {
        const matches = token.value.match(/\{([^}]+)\}/g);
        if (matches) {
          matches.forEach(match => {
            const refPath = match.slice(1, -1); // Remove { and }
            console.log('🔍 Looking for reference:', refPath, 'in token:', token.path);
            
            // Try multiple path formats
            const possiblePaths = [
              refPath,
              refPath.toLowerCase(),
              refPath.replace(/-/g, '.'),
              refPath.replace(/_/g, '.'),
              // Try with different category prefixes
              `core.${refPath}`,
              `semantic.${refPath}`,
            ];
            
            let found = false;
            for (const path of possiblePaths) {
              const sourceToken = pathMap.get(path);
              if (sourceToken && sourceToken.id !== token.id) {
                relationships.push({
                  source: sourceToken.id,
                  target: token.id,
                  type: determineRelationshipType(sourceToken, token)
                });
                console.log('✅ Found value reference:', path, '->', token.path);
                found = true;
                break;
              }
            }
            
            if (!found) {
              console.log('❌ Reference not found:', refPath, 'tried paths:', possiblePaths);
            }
          });
        }
      }
    });
    
    // Remove duplicate relationships
    const uniqueRelationships = relationships.filter((rel, index, arr) => 
      arr.findIndex(r => r.source === rel.source && r.target === rel.target) === index
    );
    
    console.log('🔗 Generated relationships:', uniqueRelationships.length);
    return uniqueRelationships;
  }, []);

  // Determine relationship type based on token categories and context
  const determineRelationshipType = (sourceToken: EnhancedToken, targetToken: EnhancedToken): string => {
    // Brand tokens override semantic tokens
    if (targetToken.category === 'brand' && sourceToken.category === 'core') {
      return 'override';
    }
    
    // Brand tokens override semantic tokens
    if (targetToken.category === 'brand' && sourceToken.category === 'semantic') {
      return 'override';
    }
    
    // Semantic tokens reference core tokens
    if (targetToken.category === 'semantic' && sourceToken.category === 'core') {
      return 'reference';
    }
    
    // Core tokens reference other core tokens (like space -> size)
    if (targetToken.category === 'core' && sourceToken.category === 'core') {
      return 'reference';
    }
    
    // Locale tokens reference core/semantic tokens
    if (targetToken.category === 'locale') {
      return 'locale-override';
    }
    
    // Default to reference
    return 'reference';
  };

  // Transform token data to React Flow format with performance optimizations
  const transformedData = useMemo(() => {
    if (!tokens || tokens.length === 0) {
      return { nodes: [], edges: [] };
    }

    // Filter tokens based on search term and filter type
    let filteredTokens = tokens.filter((token) => {
      const matchesSearch = searchTerm === '' || 
        token.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        token.path.toLowerCase().includes(searchTerm.toLowerCase()) ||
        String(token.value).toLowerCase().includes(searchTerm.toLowerCase()) ||
        (token.description && token.description.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesFilter = filterType === 'all' || token.category === filterType;
      
      return matchesSearch && matchesFilter;
    });

    // Limit nodes for performance (show top 500 most relevant)
    if (filteredTokens.length > 500) {
      // Prioritize tokens with references or that are referenced by others
      // Also ensure we have a good mix of all token types
      const coreTokens = filteredTokens.filter(t => t.category === 'core');
      const semanticTokens = filteredTokens.filter(t => t.category === 'semantic');
      const brandTokens = filteredTokens.filter(t => t.category === 'brand');
      const localeTokens = filteredTokens.filter(t => t.category === 'locale');
      
      // Take a balanced sample from each category
      const maxPerCategory = Math.floor(500 / 4);
      const selectedTokens = [
        ...coreTokens.slice(0, maxPerCategory),
        ...semanticTokens.slice(0, maxPerCategory),
        ...brandTokens.slice(0, maxPerCategory),
        ...localeTokens.slice(0, maxPerCategory)
      ];
      
      // Fill remaining slots with most connected tokens
      const remainingSlots = 500 - selectedTokens.length;
      if (remainingSlots > 0) {
        const alreadySelected = new Set(selectedTokens.map(t => t.id));
        const remaining = filteredTokens
          .filter(t => !alreadySelected.has(t.id))
          .sort((a, b) => {
            const aReferences = (a.references?.length || 0) + (a.referencedBy?.length || 0);
            const bReferences = (b.references?.length || 0) + (b.referencedBy?.length || 0);
            return bReferences - aReferences;
          })
          .slice(0, remainingSlots);
        
        selectedTokens.push(...remaining);
      }
      
      filteredTokens = selectedTokens;
    }

    // Transform tokens to React Flow nodes
    const reactFlowNodes: Node[] = filteredTokens.map((token, index) => ({
      id: token.id,
      type: 'tokenNode',
      position: { x: 0, y: 0 }, // Will be set by layout algorithm
      data: {
        label: token.name,
        value: String(token.value),
        type: token.category,
        category: token.subcategory || token.category,
        color: getNodeColor(token.category),
        description: token.description,
        path: token.path,
        isReference: token.isReference,
      },
    }));

    // Generate or use existing relationships - fix interface mismatch
    let relationships: { source: string; target: string; type: string }[] = [];
    
    if (analysis?.relationships) {
      // Convert from analyzer format to graph format
      relationships = analysis.relationships.map(rel => ({
        source: rel.from,
        target: rel.to,
        type: rel.type.replace('-to-', '-')
      }));
      console.log('📊 Using analysis relationships:', relationships.length);
    } else {
      // Generate relationships from token data
      relationships = generateRelationships(filteredTokens);
      console.log('🔗 Generated relationships:', relationships.length);
    }
    
    // Debug: Log relationships for troubleshooting
    console.log('📊 Sample relationships:', relationships.slice(0, 5));
    
    // Filter relationships to only include visible nodes
    const filteredNodeIds = new Set(filteredTokens.map(t => t.id));
    const filteredRelationships = relationships.filter(rel => 
      filteredNodeIds.has(rel.source) && filteredNodeIds.has(rel.target)
    );
    
    console.log('🎯 Filtered relationships:', filteredRelationships.length);

    // Transform relationships to React Flow edges with enhanced styling
    const reactFlowEdges: Edge[] = filteredRelationships.map((rel, index) => {
      const edgeStyle = getEdgeStyle(rel.type);
      
      return {
        id: `edge-${rel.source}-${rel.target}-${index}`,
        source: rel.source,
        target: rel.target,
        type: 'default', // Change to default for better visibility
        animated: rel.type === 'reference', // Animate references to show data flow
        style: {
          stroke: edgeStyle.stroke,
          strokeWidth: edgeStyle.strokeWidth,
          strokeDasharray: edgeStyle.strokeDasharray,
        },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: edgeStyle.stroke,
          width: 15,
          height: 15,
        },
        label: rel.type.replace('-', ' '), // Format label nicely
        labelStyle: {
          fontSize: '10px',
          fontWeight: '600',
          fill: edgeStyle.stroke,
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          padding: '2px 4px',
          borderRadius: '4px',
          border: `1px solid ${edgeStyle.stroke}`,
        },
        labelShowBg: true,
        labelBgBorderRadius: 4,
        labelBgPadding: [2, 4],
        labelBgStyle: {
          fill: 'rgba(255, 255, 255, 0.9)',
          stroke: edgeStyle.stroke,
          strokeWidth: 1,
        },
      };
    });

    return { nodes: reactFlowNodes, edges: reactFlowEdges };
  }, [tokens, analysis, searchTerm, filterType, generateRelationships]);

  // Apply layout and update nodes/edges when data changes with performance optimizations
  useEffect(() => {
    if (transformedData.nodes.length > 0) {
      // Determine if we should use clustering based on node count
      const shouldCluster = transformedData.nodes.length > 300;
      
      const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
        transformedData.nodes,
        transformedData.edges,
        'TB', // Top to Bottom layout
        shouldCluster,
        layout
      );
      
      setNodes(layoutedNodes);
      setEdges(layoutedEdges);
    } else {
      setNodes([]);
      setEdges([]);
    }
  }, [transformedData, setNodes, setEdges]);

  // Memoized callback for connections
  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  // Memoized callback for node click with enhanced functionality
  const onNodeClick = useCallback((event: React.MouseEvent, node: Node) => {
    console.log('Token node clicked:', {
      id: node.id,
      label: node.data.label,
      type: node.data.type,
      value: node.data.value,
      path: node.data.path
    });
    
    // Add visual feedback
    setNodes((nds) =>
      nds.map((n) => ({
        ...n,
        selected: n.id === node.id,
      }))
    );
  }, [setNodes]);

  // Memoized callbacks for performance
  const onNodesChangeCallback = useCallback(onNodesChange, [onNodesChange]);
  const onEdgesChangeCallback = useCallback(onEdgesChange, [onEdgesChange]);

  // Render performance indicator
  const renderPerformanceInfo = () => {
    const totalTokens = tokens?.length || 0;
    const visibleTokens = transformedData.nodes.length;
    const visibleEdges = transformedData.edges.length;
    
    return (
      <div style={{
        position: 'absolute',
        top: '10px',
        right: '10px',
        backgroundColor: 'var(--t-color-surface-secondary)',
        padding: 'var(--t-space-200)',
        borderRadius: 'var(--t-border-radius-200)',
        fontSize: 'var(--t-typography-caption-sm-font-size)',
        color: 'var(--t-color-text-tertiary)',
        zIndex: 1000,
        border: '1px solid var(--t-color-border-secondary)',
      }}>
        <div>Total: {totalTokens} tokens</div>
        <div>Visible: {visibleTokens} nodes, {visibleEdges} edges</div>
        <div>Relationships: {visibleEdges > 0 ? '✅' : '❌'} {visibleEdges} found</div>
        {visibleTokens < totalTokens && (
          <div style={{ color: 'var(--t-color-text-warning)' }}>
            Showing top {visibleTokens} tokens (balanced mix of all types)
          </div>
        )}
      </div>
    );
  };

  if (!tokens || tokens.length === 0) {
    return (
      <div style={{
        width: '100%',
        height: '100%',
        minHeight: '600px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--t-color-text-secondary)',
        fontSize: 'var(--t-typography-body-md-font-size)',
      }}>
        No tokens available for visualization
      </div>
    );
  }

  return (
    <div style={{ width: '100%', height: '100%', minHeight: '600px', position: 'relative' }}>
      <TokenGraphLegend />
      <TokenGraphControls layout={layout} onLayoutChange={setLayout} />
      {renderPerformanceInfo()}
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChangeCallback}
        onEdgesChange={onEdgesChangeCallback}
        onConnect={onConnect}
        onNodeClick={onNodeClick}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{
          padding: 0.1,
          includeHiddenNodes: false,
          minZoom: 0.1,
          maxZoom: 1.5,
        }}
        style={{
          backgroundColor: 'var(--t-color-surface-primary)',
        }}
        minZoom={0.05}
        maxZoom={2}
        defaultViewport={{ x: 0, y: 0, zoom: 0.5 }}
        attributionPosition="bottom-left"
        proOptions={{ hideAttribution: true }}
        elementsSelectable={true}
        nodesConnectable={false}
        nodesDraggable={true}
        panOnDrag={true}
        zoomOnScroll={true}
        zoomOnPinch={true}
        deleteKeyCode={null}
      >
        <Controls 
          showInteractive={false}
        />
        <MiniMap 
          nodeColor={(node) => (node.data as any)?.color || '#6B7280'}
          style={{
            backgroundColor: 'var(--t-color-surface-secondary)',
            border: '1px solid var(--t-color-border-secondary)',
          }}
          pannable
          zoomable
          position="bottom-right"
        />
        <Background 
          variant={BackgroundVariant.Dots} 
          gap={20} 
          size={1}
          color="var(--t-color-border-tertiary)"
        />
      </ReactFlow>
    </div>
  );
});

TokenGraphVisualization.displayName = 'TokenGraphVisualization';