#!/usr/bin/env node

/**
 * CSS Injection Test Script
 * 
 * This script validates that CSS is properly injected into the built library
 */

const fs = require('fs');
const path = require('path');

// Colors for console output
const RED = '\x1b[31m';
const GREEN = '\x1b[32m';
const YELLOW = '\x1b[33m';
const BLUE = '\x1b[34m';
const RESET = '\x1b[0m';

console.log(`\n${BLUE}=======================================================${RESET}`);
console.log(`${BLUE}= Testing CSS Injection in Built Library =${RESET}`);
console.log(`${BLUE}=======================================================${RESET}\n`);

const ROOT_DIR = path.resolve(__dirname, '..');
const DIST_DIR = path.join(ROOT_DIR, 'dist');

function testCSSInjection() {
  console.log(`${YELLOW}Testing CSS injection...${RESET}`);
  
  // Check if build exists
  if (!fs.existsSync(DIST_DIR)) {
    console.error(`${RED}❌ Dist directory not found. Run 'yarn build' first.${RESET}`);
    return false;
  }
  
  const indexJsPath = path.join(DIST_DIR, 'index.js');
  const indexCjsPath = path.join(DIST_DIR, 'index.cjs');
  
  // Test ES module
  if (fs.existsSync(indexJsPath)) {
    const esContent = fs.readFileSync(indexJsPath, 'utf-8');
    
    // Look for CSS injection patterns
    const hasStyleCreation = esContent.includes('createElement("style")') || 
                           esContent.includes('document.createElement("style")');
    const hasCSSContent = esContent.includes('textContent') || esContent.includes('innerHTML');
    const hasStyleAppend = esContent.includes('appendChild') || esContent.includes('head.append');
    
    console.log(`${BLUE}ES Module (index.js):${RESET}`);
    console.log(`  Style creation: ${hasStyleCreation ? GREEN + '✓' : RED + '❌'}${RESET}`);
    console.log(`  CSS content injection: ${hasCSSContent ? GREEN + '✓' : RED + '❌'}${RESET}`);
    console.log(`  Style appending: ${hasStyleAppend ? GREEN + '✓' : RED + '❌'}${RESET}`);
    
    if (hasStyleCreation && hasCSSContent && hasStyleAppend) {
      console.log(`${GREEN}✓ ES module appears to have CSS injection${RESET}`);
    } else {
      console.log(`${YELLOW}⚠️ ES module may not have proper CSS injection${RESET}`);
    }
  }
  
  // Test CommonJS module
  if (fs.existsSync(indexCjsPath)) {
    const cjsContent = fs.readFileSync(indexCjsPath, 'utf-8');
    
    const hasStyleCreation = cjsContent.includes('createElement("style")') || 
                           cjsContent.includes('document.createElement("style")');
    const hasCSSContent = cjsContent.includes('textContent') || cjsContent.includes('innerHTML');
    const hasStyleAppend = cjsContent.includes('appendChild') || cjsContent.includes('head.append');
    
    console.log(`${BLUE}CommonJS Module (index.cjs):${RESET}`);
    console.log(`  Style creation: ${hasStyleCreation ? GREEN + '✓' : RED + '❌'}${RESET}`);
    console.log(`  CSS content injection: ${hasCSSContent ? GREEN + '✓' : RED + '❌'}${RESET}`);
    console.log(`  Style appending: ${hasStyleAppend ? GREEN + '✓' : RED + '❌'}${RESET}`);
    
    if (hasStyleCreation && hasCSSContent && hasStyleAppend) {
      console.log(`${GREEN}✓ CommonJS module appears to have CSS injection${RESET}`);
    } else {
      console.log(`${YELLOW}⚠️ CommonJS module may not have proper CSS injection${RESET}`);
    }
  }
  
  return true;
}

function checkBundleSize() {
  console.log(`\n${YELLOW}Checking bundle sizes...${RESET}`);
  
  const files = ['index.js', 'index.cjs'];
  
  files.forEach(file => {
    const filePath = path.join(DIST_DIR, file);
    if (fs.existsSync(filePath)) {
      const stats = fs.statSync(filePath);
      const sizeKB = (stats.size / 1024).toFixed(2);
      console.log(`  ${file}: ${sizeKB} KB`);
    }
  });
}

function checkForSeparateCSS() {
  console.log(`\n${YELLOW}Checking for separate CSS files...${RESET}`);
  
  const distFiles = fs.readdirSync(DIST_DIR);
  const cssFiles = distFiles.filter(file => file.endsWith('.css'));
  
  if (cssFiles.length === 0) {
    console.log(`${GREEN}✓ No separate CSS files found (expected with CSS injection)${RESET}`);
  } else {
    console.log(`${YELLOW}⚠️ Found separate CSS files: ${cssFiles.join(', ')}${RESET}`);
    console.log(`${YELLOW}This might indicate CSS injection is not working properly${RESET}`);
  }
}

function runTests() {
  if (!testCSSInjection()) {
    process.exit(1);
  }
  
  checkBundleSize();
  checkForSeparateCSS();
  
  console.log(`\n${GREEN}==============================================${RESET}`);
  console.log(`${GREEN}= CSS Injection Test Complete =${RESET}`);
  console.log(`${GREEN}==============================================${RESET}`);
  
  console.log(`\n${BLUE}Next steps:${RESET}`);
  console.log(`1. Test in a consumer app: create a test project and import components`);
  console.log(`2. Verify styles are applied without separate CSS imports`);
  console.log(`3. Check browser dev tools to see if styles are injected`);
}

runTests();
