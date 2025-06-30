# Guía de Deployment para Vercel

## Configuración para SeriesGuide

### 1. Variables de Entorno en Vercel

Configura estas variables en tu dashboard de Vercel:

```
MONGODB_URI=mongodb+srv://tu-usuario:tu-password@tu-cluster.mongodb.net/tu-database
JWT_SECRET=tu-jwt-secret-super-seguro
ADMIN_USERNAME=admin
ADMIN_PASSWORD=tu-password-admin
```

### 2. Configuración del Proyecto

- **Framework**: Astro
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm ci`
- **Node.js Version**: 20.x (IMPORTANTE: cambiar de 18.x a 20.x)

### 3. Pasos para Deploy

1. Conecta tu repositorio de GitHub a Vercel
2. **IMPORTANTE**: Ve a Settings > Functions y cambia Node.js Version a 20.x
3. Configura las variables de entorno en Settings > Environment Variables
4. Asegúrate de que todas las variables estén en "Production", "Preview" y "Development"
5. Haz push de los cambios al repositorio
6. Vercel hará el deploy automáticamente

### 4. Archivos Importantes

- `astro.config.mjs`: Configurado con adaptador de Vercel
- `vercel.json`: Configuración específica de Vercel
- `.env.example`: Ejemplo de variables de entorno
- `.gitignore`: Excluye archivos sensibles

### 5. Solución de Problemas

**Error de Runtime nodejs18.x:**

- Ve a Settings > Functions
- Cambia Node.js Version a 20.x
- Redeploy el proyecto

Si la página no carga:

1. Verifica que todas las variables de entorno estén configuradas
2. Revisa los logs de función en Vercel Dashboard
3. Asegúrate de que la conexión a MongoDB funcione
4. Verifica que no haya errores en la construcción
5. Consulta `RUNTIME_FIX.md` para errores específicos

### 6. URLs Importantes

- **Dashboard**: https://vercel.com/dashboard
- **Logs**: Functions > View Function Logs
- **Analytics**: https://vercel.com/analytics
