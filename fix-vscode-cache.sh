#!/bin/bash

echo "🔧 Limpiando caché de VS Code y TypeScript..."

# Limpiar caché de Astro
echo "📁 Limpiando .astro/"
rm -rf .astro

# Limpiar caché de Node modules
echo "📁 Limpiando node_modules/.cache"
rm -rf node_modules/.cache

# Limpiar caché de VS Code
echo "📁 Limpiando .vscode/.cache"
rm -rf .vscode/.cache

# Limpiar archivos temporales de TypeScript
echo "📁 Limpiando archivos temporales de TypeScript"
find . -name "*.tsbuildinfo" -delete 2>/dev/null || true

# Limpiar caché de npm
echo "🧹 Limpiando caché de npm"
npm cache clean --force 2>/dev/null || true

echo "✅ Caché limpiada completamente"
echo ""
echo "📋 Pasos manuales para completar la limpieza:"
echo "1. Ctrl+Shift+P → 'TypeScript: Reload Projects'"
echo "2. Ctrl+Shift+P → 'Developer: Reload Window'"
echo "3. Si persisten los puntos rojos, reinicia VS Code completamente"
echo ""
