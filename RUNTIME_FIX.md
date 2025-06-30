# Solución para Error de Runtime de Vercel

## Problema

```
Error: The following Serverless Functions contain an invalid "runtime":
- _render (nodejs18.x). Learn More: https://vercel.com/guides/serverless-function-contains-invalid-runtime-error
```

## Causa

Vercel ha actualizado sus runtimes soportados y `nodejs18.x` ya no es válido.

## Solución

### 1. Configuración en Dashboard de Vercel

Ve a tu proyecto en Vercel Dashboard:

1. **Settings** → **Functions**
2. **Node.js Version**: Selecciona **20.x**
3. **Save Changes**

### 2. Variables de Entorno

Asegúrate de que tienes configuradas estas variables:

```
MONGODB_URI=tu-mongodb-uri
JWT_SECRET=tu-jwt-secret
ADMIN_USERNAME=admin
ADMIN_PASSWORD=tu-password
```

### 3. Re-deploy

Después de cambiar la configuración:

1. Ve a **Deployments**
2. Encuentra el último deployment
3. Click en **"Redeploy"**
4. O haz un nuevo push al repositorio

### 4. Verificación

El proyecto debería deployarse exitosamente con:

- Node.js 20.x runtime
- Funciones serverless funcionando
- API routes operativas

## Archivos Importantes

- `vercel.json`: Configuración de deployment
- `astro.config.mjs`: Configuración del adaptador
- `.env.example`: Variables de entorno de ejemplo

## Comandos Útiles

```bash
# Limpiar y construir
npm run build

# Desarrollo local
npm run dev

# Verificar deployment
vercel --prod
```
