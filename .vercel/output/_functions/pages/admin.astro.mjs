import { c as createComponent, b as createAstro, r as renderHead, d as renderScript, a as renderTemplate } from '../chunks/astro/server_CPsB3qD4.mjs';
import { g as getServerAuthUser } from '../chunks/auth_BB3BAWhE.mjs';
import { g as getSeries, a as getAnalisis } from '../chunks/mongo_CASFip9t.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const user = getServerAuthUser(Astro2.request);
  if (!user || user.role !== "admin") {
    return Astro2.redirect("/login");
  }
  let totalSeries = 0;
  let totalAnalisis = 0;
  let error = "";
  try {
    const series = await getSeries();
    const analisis = await getAnalisis();
    totalSeries = series.length;
    totalAnalisis = analisis.length;
  } catch (err) {
    error = "Error cargando estad\xEDsticas";
  }
  return renderTemplate`<html lang="es" data-astro-cid-u2h3djql> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Panel de Administración - SeriesGuide</title>${renderHead()}</head> <body data-astro-cid-u2h3djql> <div class="container" data-astro-cid-u2h3djql> <!-- Header --> <div class="header" data-astro-cid-u2h3djql> <div class="user-info" data-astro-cid-u2h3djql> <div class="user-avatar" data-astro-cid-u2h3djql> ${user.username.charAt(0).toUpperCase()} </div> <span data-astro-cid-u2h3djql>Hola, ${user.username}</span> <button class="logout-btn" id="logoutBtn" data-astro-cid-u2h3djql>Cerrar Sesión</button> </div> <div class="header-content" data-astro-cid-u2h3djql> <p class="welcome-text" data-astro-cid-u2h3djql>Bienvenido al</p> <h1 data-astro-cid-u2h3djql>Panel de Administración</h1> <p data-astro-cid-u2h3djql>SeriesGuide Dashboard</p> </div> </div> <!-- Content --> <div class="content" data-astro-cid-u2h3djql> ${error && renderTemplate`<div class="error-message" data-astro-cid-u2h3djql>⚠️ ${error}</div>`} <!-- Statistics --> <div class="stats-grid" data-astro-cid-u2h3djql> <div class="stat-card" data-astro-cid-u2h3djql> <div class="stat-number" data-astro-cid-u2h3djql>${totalSeries}</div> <div class="stat-label" data-astro-cid-u2h3djql>Series Registradas</div> </div> <div class="stat-card" data-astro-cid-u2h3djql> <div class="stat-number" data-astro-cid-u2h3djql>${totalAnalisis}</div> <div class="stat-label" data-astro-cid-u2h3djql>Análisis Publicados</div> </div> <div class="stat-card" data-astro-cid-u2h3djql> <div class="stat-number" data-astro-cid-u2h3djql>${totalSeries + totalAnalisis}</div> <div class="stat-label" data-astro-cid-u2h3djql>Total de Contenido</div> </div> </div> <!-- Actions --> <div class="actions-grid" data-astro-cid-u2h3djql> <!-- Series Management --> <div class="action-card series-actions" data-astro-cid-u2h3djql> <div class="action-icon" data-astro-cid-u2h3djql>📺</div> <div class="action-title" data-astro-cid-u2h3djql>Gestión de Series</div> <div class="action-description" data-astro-cid-u2h3djql>
Agregar nuevas series, editar información existente y gestionar el
              catálogo completo.
</div> <div class="action-links" data-astro-cid-u2h3djql> <a href="/admin/add-serie" class="btn btn-primary" data-astro-cid-u2h3djql>
➕ Agregar Serie
</a> <a href="/admin/manage-series" class="btn btn-secondary" data-astro-cid-u2h3djql>
📝 Gestionar Series
</a> </div> </div> <!-- Analysis Management --> <div class="action-card analysis-actions" data-astro-cid-u2h3djql> <div class="action-icon" data-astro-cid-u2h3djql>📖</div> <div class="action-title" data-astro-cid-u2h3djql>Gestión de Análisis</div> <div class="action-description" data-astro-cid-u2h3djql>
Crear nuevos análisis, editar contenido existente y gestionar
              publicaciones.
</div> <div class="action-links" data-astro-cid-u2h3djql> <a href="/admin/add-analysis" class="btn btn-primary" data-astro-cid-u2h3djql>
➕ Crear Análisis
</a> <a href="/admin/manage-analysis" class="btn btn-secondary" data-astro-cid-u2h3djql>
📝 Gestionar Análisis
</a> </div> </div> <!-- Content Management --> <div class="action-card management-actions" data-astro-cid-u2h3djql> <div class="action-icon" data-astro-cid-u2h3djql>🔧</div> <div class="action-title" data-astro-cid-u2h3djql>Herramientas</div> <div class="action-description" data-astro-cid-u2h3djql>
Actualizar imágenes, gestionar contenido y herramientas de
              mantenimiento.
</div> <div class="action-links" data-astro-cid-u2h3djql> <a href="/admin/update-images" class="btn btn-primary" data-astro-cid-u2h3djql>
🖼️ Actualizar Imágenes
</a> <a href="/" class="btn btn-secondary" target="_blank" data-astro-cid-u2h3djql>
👁️ Ver Sitio
</a> </div> </div> </div> </div> </div> ${renderScript($$result, "/Users/jocelyncastro/Desktop/ProyectoSeries/series-guide/src/pages/admin/index.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "/Users/jocelyncastro/Desktop/ProyectoSeries/series-guide/src/pages/admin/index.astro", void 0);

const $$file = "/Users/jocelyncastro/Desktop/ProyectoSeries/series-guide/src/pages/admin/index.astro";
const $$url = "/admin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
