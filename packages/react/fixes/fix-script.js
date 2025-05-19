const fs = require("fs");
const path = require("path");

// Root directory of the React package
const REACT_PKG_DIR = path.resolve("../");

// 1. Update package.json
function updatePackageJson() {
  const pkgJsonPath = path.join(REACT_PKG_DIR, "package.json");
  const pkg = require(pkgJsonPath);

  // Fix entry points
  pkg.main = "dist/index.cjs.js";
  pkg.module = "dist/index.es.js";
  pkg.types = "dist/index.d.ts";

  // Update exports field
  pkg.exports = {
    ".": {
      types: "./dist/index.d.ts",
      import: "./dist/index.es.js",
      require: "./dist/index.cjs.js"
    },
    "./styles.css": "./dist/react.css",
    "./components.css": "./dist/react.css",
    "./all.css": "./dist/react.css"
  };

  // Write changes back to package.json
  fs.writeFileSync(pkgJsonPath, JSON.stringify(pkg, null, 2));
  console.log("Updated package.json successfully");
}

// Execute the functions
updatePackageJson();
console.log("All fixes applied!");
