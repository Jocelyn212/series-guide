import { c as createComponent, b as createAstro, r as renderHead, d as renderScript, a as renderTemplate, e as addAttribute } from '../../chunks/astro/server_CPsB3qD4.mjs';
import { g as getServerAuthUser } from '../../chunks/auth_BB3BAWhE.mjs';
import { g as getSeries, c as connectMongoDB } from '../../chunks/mongo_CASFip9t.mjs';
/* empty css                                            */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$UpdateImages = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$UpdateImages;
  const user = getServerAuthUser(Astro2.request);
  if (!user || user.role !== "admin") {
    return Astro2.redirect("/login");
  }
  let success = false;
  let error = "";
  let series = [];
  try {
    series = await getSeries();
  } catch (err) {
    error = "Error cargando series";
  }
  if (Astro2.request.method === "POST") {
    try {
      const formData = await Astro2.request.formData();
      const serieSlug = formData.get("serieSlug");
      const posterUrl = formData.get("posterUrl");
      const backdropUrl = formData.get("backdropUrl");
      const { seriesCollection } = await connectMongoDB();
      await seriesCollection.updateOne(
        { slug: serieSlug },
        {
          $set: {
            posterUrl,
            backdropUrl,
            updatedAt: /* @__PURE__ */ new Date()
          }
        }
      );
      success = true;
    } catch (err) {
      error = err instanceof Error ? err.message : "Error desconocido";
    }
  }
  return renderTemplate`<html lang="es" data-astro-cid-anos4r7n> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Actualizar Imágenes - Admin SeriesGuide</title>${renderHead()}</head> <body data-astro-cid-anos4r7n> <a href="/admin" class="back-link" data-astro-cid-anos4r7n>← Volver al panel</a> <div class="container" data-astro-cid-anos4r7n> <div class="header" data-astro-cid-anos4r7n> <h1 data-astro-cid-anos4r7n>🖼️ Actualizar Imágenes</h1> <p data-astro-cid-anos4r7n>Actualiza las URLs de posters y backdrops de las series</p> </div> <div class="content" data-astro-cid-anos4r7n> ${success && renderTemplate`<div class="alert alert-success" data-astro-cid-anos4r7n>
✅ ¡Imágenes actualizadas exitosamente!
</div>`} ${error && renderTemplate`<div class="alert alert-error" data-astro-cid-anos4r7n>❌ Error: ${error}</div>`} <form method="POST" data-astro-cid-anos4r7n> <div class="form-group" data-astro-cid-anos4r7n> <label for="serieSlug" data-astro-cid-anos4r7n>Seleccionar Serie*</label> <select id="serieSlug" name="serieSlug" required data-astro-cid-anos4r7n> <option value="" data-astro-cid-anos4r7n>Selecciona una serie...</option> ${series.map((serie) => renderTemplate`<option${addAttribute(serie.slug, "value")}${addAttribute(serie.posterUrl, "data-poster")}${addAttribute(serie.backdropUrl, "data-backdrop")}${addAttribute(serie.title, "data-title")}${addAttribute(serie.startYear, "data-year")}${addAttribute(serie.network, "data-network")} data-astro-cid-anos4r7n> ${serie.title} (${serie.startYear})
</option>`)} </select> </div> <div id="currentInfo" class="series-info" style="display: none;" data-astro-cid-anos4r7n> <h3 data-astro-cid-anos4r7n>Información Actual</h3> <div class="current-images" data-astro-cid-anos4r7n> <img id="currentPoster" class="current-poster" alt="Poster actual" style="display: none;" data-astro-cid-anos4r7n> <div class="current-info" data-astro-cid-anos4r7n> <h4 id="currentTitle" data-astro-cid-anos4r7n></h4> <p data-astro-cid-anos4r7n><strong data-astro-cid-anos4r7n>Año:</strong> <span id="currentYear" data-astro-cid-anos4r7n></span></p> <p data-astro-cid-anos4r7n> <strong data-astro-cid-anos4r7n>Network:</strong> <span id="currentNetwork" data-astro-cid-anos4r7n></span> </p> <p data-astro-cid-anos4r7n> <strong data-astro-cid-anos4r7n>Poster actual:</strong> <span id="currentPosterUrl" style="font-size: 0.875rem; word-break: break-all;" data-astro-cid-anos4r7n></span> </p> <p data-astro-cid-anos4r7n> <strong data-astro-cid-anos4r7n>Backdrop actual:</strong> <span id="currentBackdropUrl" style="font-size: 0.875rem; word-break: break-all;" data-astro-cid-anos4r7n></span> </p> </div> </div> </div> <div class="form-group" data-astro-cid-anos4r7n> <label for="posterUrl" data-astro-cid-anos4r7n>Nueva URL del Poster*</label> <div class="url-input-group" data-astro-cid-anos4r7n> <input type="url" id="posterUrl" name="posterUrl" required placeholder="https://ejemplo.com/poster.jpg" data-astro-cid-anos4r7n> <button type="button" class="url-test-btn" onclick="testImage('posterUrl', 'posterPreview')" data-astro-cid-anos4r7n>Test</button> </div> </div> <div class="form-group" data-astro-cid-anos4r7n> <label for="backdropUrl" data-astro-cid-anos4r7n>Nueva URL del Backdrop</label> <div class="url-input-group" data-astro-cid-anos4r7n> <input type="url" id="backdropUrl" name="backdropUrl" placeholder="https://ejemplo.com/backdrop.jpg" data-astro-cid-anos4r7n> <button type="button" class="url-test-btn" onclick="testImage('backdropUrl', 'backdropPreview')" data-astro-cid-anos4r7n>Test</button> </div> </div> <div class="preview-container" data-astro-cid-anos4r7n> <div class="preview-box" data-astro-cid-anos4r7n> <div id="posterPreview" data-astro-cid-anos4r7n> <div class="preview-placeholder" data-astro-cid-anos4r7n>📷</div> <div class="preview-label" data-astro-cid-anos4r7n>Vista previa del poster</div> </div> </div> <div class="preview-box" data-astro-cid-anos4r7n> <div id="backdropPreview" data-astro-cid-anos4r7n> <div class="preview-placeholder" data-astro-cid-anos4r7n>🖼️</div> <div class="preview-label" data-astro-cid-anos4r7n>Vista previa del backdrop</div> </div> </div> </div> <div style="margin-top: 2rem;" data-astro-cid-anos4r7n> <a href="/admin" class="btn btn-secondary" data-astro-cid-anos4r7n>Cancelar</a> <button type="submit" class="btn" data-astro-cid-anos4r7n>Actualizar Imágenes</button> </div> </form> </div> </div> ${renderScript($$result, "/Users/jocelyncastro/Desktop/ProyectoSeries/series-guide/src/pages/admin/update-images.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "/Users/jocelyncastro/Desktop/ProyectoSeries/series-guide/src/pages/admin/update-images.astro", void 0);

const $$file = "/Users/jocelyncastro/Desktop/ProyectoSeries/series-guide/src/pages/admin/update-images.astro";
const $$url = "/admin/update-images";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$UpdateImages,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
