#!/bin/bash
# Vercel Runtime Fix - Updates Node.js version to 20.x

set -e

FUNCTIONS_DIR=".vercel/output/functions"
FUNCTION_DIR=$(find "$FUNCTIONS_DIR" -name "*.func" -type d 2>/dev/null | head -1)

if [[ -z "$FUNCTION_DIR" ]]; then
    echo "⚠️  No Vercel functions found - skipping runtime fix"
    exit 0
fi

CONFIG_FILE="$FUNCTION_DIR/.vc-config.json"

if [[ -f "$CONFIG_FILE" ]]; then
    sed -i.bak 's/"nodejs18\.x"/"nodejs20.x"/' "$CONFIG_FILE"
    rm -f "$CONFIG_FILE.bak"
    echo "✅ Runtime updated to Node.js 20.x"
else
    echo "⚠️  No config file found - skipping runtime fix"
fi
