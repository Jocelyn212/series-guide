#!/bin/bash

echo "🔧 Fixing Vercel runtime configuration..."

# Check if the .vc-config.json file exists
if [ -f ".vercel/output/functions/_render.func/.vc-config.json" ]; then
    echo "📝 Updating Node.js runtime to 20.x..."
    
    # Replace nodejs18.x with nodejs20.x
    sed -i '' 's/nodejs18\.x/nodejs20.x/g' .vercel/output/functions/_render.func/.vc-config.json
    
    echo "✅ Runtime configuration updated:"
    cat .vercel/output/functions/_render.func/.vc-config.json
else
    echo "❌ .vc-config.json file not found"
fi
