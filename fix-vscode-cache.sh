#!/bin/bash
# VS Code Cache Cleanup

set -e

echo "🧹 Cleaning development cache..."

rm -rf .astro node_modules/.cache .vscode/.cache
find . -name "*.tsbuildinfo" -delete 2>/dev/null || true

echo "✅ Cache cleaned"
echo ""
echo "Next steps:"
echo "1. Cmd+Shift+P → 'TypeScript: Reload Projects'"
echo "2. Cmd+Shift+P → 'Developer: Reload Window'"
