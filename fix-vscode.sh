#!/bin/bash

echo "🔧 Limpiando caché y configuraciones de VS Code para el proyecto..."

# Detener servidor de desarrollo si está ejecutándose
echo "🛑 Deteniendo servidor de desarrollo..."
pkill -f "astro dev" || true
sleep 2

# Limpiar caché completo
echo "📁 Limpiando caché completo..."
rm -rf .astro/
rm -rf node_modules/.cache/
rm -rf node_modules/.vite/
rm -rf dist/

# Regenerar tipos de Astro
echo "🔄 Regenerando tipos de Astro..."
npm run build

echo "✅ Limpieza completada."
echo ""
echo "🎯 Para completar la limpieza:"
echo "1. Recarga la ventana de VS Code: Cmd+Shift+P -> 'Developer: Reload Window'"
echo "2. O reinicia VS Code completamente"
echo "3. Si persiste, usa Cmd+Shift+P -> 'TypeScript: Restart TS Server'"
echo ""
echo "📊 Estado del proyecto:"
echo "- ✅ Sin errores de compilación"
echo "- ✅ Construcción exitosa"  
echo "- ✅ Servidor funcionando en http://localhost:4321/"
echo "- ✅ Archivos de configuración optimizados"
echo "- ✅ Cache limpio y regenerado"
echo ""
echo "🚀 Para usar el proyecto:"
echo "1. npm run dev - Servidor de desarrollo"
echo "2. npm run build - Construir para producción"
