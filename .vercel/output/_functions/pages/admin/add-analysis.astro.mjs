import { c as createComponent, b as createAstro, r as renderHead, d as renderScript, a as renderTemplate, e as addAttribute } from '../../chunks/astro/server_sybGnmsI.mjs';
import 'kleur/colors';
import 'clsx';
import { g as getServerAuthUser } from '../../chunks/auth_BB3BAWhE.mjs';
import { g as getSeries, c as connectMongoDB } from '../../chunks/mongo_CASFip9t.mjs';
/* empty css                                           */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$AddAnalysis = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AddAnalysis;
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
      const newAnalysis = {
        title: formData.get("title"),
        slug: formData.get("slug"),
        content: formData.get("content"),
        excerpt: formData.get("excerpt"),
        universe: formData.get("universe"),
        tags: formData.get("tags").split(",").map((t) => t.trim()),
        author: {
          name: formData.get("authorName"),
          avatar: formData.get("authorAvatar")
        },
        status: "published",
        readTime: parseInt(formData.get("readTime")),
        views: parseInt(formData.get("views")) || 0,
        likes: parseInt(formData.get("likes")) || 0,
        createdAt: /* @__PURE__ */ new Date(),
        updatedAt: /* @__PURE__ */ new Date(),
        publishedAt: /* @__PURE__ */ new Date()
      };
      const { analysisCollection } = await connectMongoDB();
      await analysisCollection.insertOne(newAnalysis);
      success = true;
    } catch (err) {
      error = err instanceof Error ? err.message : "Error desconocido";
    }
  }
  return renderTemplate`<html lang="es" data-astro-cid-lrq7rxme> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Crear Análisis - Admin SeriesGuide</title>${renderHead()}</head> <body data-astro-cid-lrq7rxme> <a href="/admin" class="back-link" data-astro-cid-lrq7rxme>← Volver al panel</a> <div class="container" data-astro-cid-lrq7rxme> <div class="header" data-astro-cid-lrq7rxme> <h1 data-astro-cid-lrq7rxme>📖 Crear Nuevo Análisis</h1> <p data-astro-cid-lrq7rxme>Escribe un análisis detallado para una serie</p> </div> <div class="form-container" data-astro-cid-lrq7rxme> ${success && renderTemplate`<div class="alert alert-success" data-astro-cid-lrq7rxme>
✅ ¡Análisis creado exitosamente!
</div>`} ${error && renderTemplate`<div class="alert alert-error" data-astro-cid-lrq7rxme>❌ Error: ${error}</div>`} <div class="quick-fill" data-astro-cid-lrq7rxme> <h4 data-astro-cid-lrq7rxme>🎯 Selección Rápida de Serie</h4> <div class="series-selector" data-astro-cid-lrq7rxme> <select id="serieSelector" data-astro-cid-lrq7rxme> <option value="" data-astro-cid-lrq7rxme>Seleccionar una serie para autocompletar...</option> ${series.map((serie) => renderTemplate`<option${addAttribute(serie.slug, "value")}${addAttribute(serie.title, "data-title")} data-astro-cid-lrq7rxme> ${serie.title} (${serie.startYear})
</option>`)} </select> </div> </div> <form method="POST" data-astro-cid-lrq7rxme> <div class="form-group" data-astro-cid-lrq7rxme> <label for="title" data-astro-cid-lrq7rxme>Título del Análisis*</label> <input type="text" id="title" name="title" required placeholder="Ej: La Complejidad Moral de Walter White" data-astro-cid-lrq7rxme> </div> <div class="form-group" data-astro-cid-lrq7rxme> <label for="slug" data-astro-cid-lrq7rxme>Slug (URL amigable)*</label> <input type="text" id="slug" name="slug" required placeholder="Ej: complejidad-moral-walter-white" data-astro-cid-lrq7rxme> <div class="help-text" data-astro-cid-lrq7rxme>
Sin espacios, solo letras minúsculas y guiones
</div> </div> <div class="form-group" data-astro-cid-lrq7rxme> <label for="excerpt" data-astro-cid-lrq7rxme>Extracto/Resumen*</label> <textarea id="excerpt" name="excerpt" required style="min-height: 80px;" placeholder="Breve descripción del análisis (1-2 frases)" data-astro-cid-lrq7rxme></textarea> </div> <div class="form-group" data-astro-cid-lrq7rxme> <label for="content" data-astro-cid-lrq7rxme>Contenido del Análisis (Markdown)*</label> <textarea id="content" name="content" required placeholder="# Título Principal

## Subtítulo

Escribe aquí tu análisis completo usando **Markdown**...

### Otro Subtítulo

Puedes usar:
- **Negrita**
- *Cursiva*
- [Enlaces](https://example.com)
- Listas
- Y mucho más..." data-astro-cid-lrq7rxme></textarea> <div class="markdown-help" data-astro-cid-lrq7rxme> <strong data-astro-cid-lrq7rxme>Ayuda de Markdown:</strong>
# Título | ## Subtítulo | **negrita** | *cursiva* | [enlace](url) |
              - lista
</div> </div> <div class="form-row" data-astro-cid-lrq7rxme> <div class="form-group" data-astro-cid-lrq7rxme> <label for="tags" data-astro-cid-lrq7rxme>Tags/Etiquetas*</label> <input type="text" id="tags" name="tags" required placeholder="breaking-bad, drama, antihero" data-astro-cid-lrq7rxme> <div class="help-text" data-astro-cid-lrq7rxme>
Separados por comas. Incluye el slug de la serie.
</div> </div> <div class="form-group" data-astro-cid-lrq7rxme> <label for="universe" data-astro-cid-lrq7rxme>Universo (Opcional)</label> <select id="universe" name="universe" data-astro-cid-lrq7rxme> <option value="" data-astro-cid-lrq7rxme>Sin universo específico</option> <option value="blue" data-astro-cid-lrq7rxme>Universo Azul</option> <option value="red" data-astro-cid-lrq7rxme>Universo Rojo</option> </select> <div class="help-text" data-astro-cid-lrq7rxme>Para series como Fringe</div> </div> </div> <div class="form-row" data-astro-cid-lrq7rxme> <div class="form-group" data-astro-cid-lrq7rxme> <label for="authorName" data-astro-cid-lrq7rxme>Nombre del Autor*</label> <input type="text" id="authorName" name="authorName" required placeholder="Dr. Elena Martínez" data-astro-cid-lrq7rxme> </div> <div class="form-group" data-astro-cid-lrq7rxme> <label for="authorAvatar" data-astro-cid-lrq7rxme>Avatar del Autor</label> <input type="url" id="authorAvatar" name="authorAvatar" placeholder="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" data-astro-cid-lrq7rxme> <div class="help-text" data-astro-cid-lrq7rxme>
URL opcional del avatar del autor (recomendado: Unsplash o
                similar)
</div> </div> </div> <div class="form-row-3" data-astro-cid-lrq7rxme> <div class="form-group" data-astro-cid-lrq7rxme> <label for="readTime" data-astro-cid-lrq7rxme>Tiempo de Lectura (min)*</label> <input type="number" id="readTime" name="readTime" required min="1" placeholder="12" data-astro-cid-lrq7rxme> </div> <div class="form-group" data-astro-cid-lrq7rxme> <label for="views" data-astro-cid-lrq7rxme>Views Iniciales</label> <input type="number" id="views" name="views" min="0" placeholder="1250" data-astro-cid-lrq7rxme> </div> <div class="form-group" data-astro-cid-lrq7rxme> <label for="likes" data-astro-cid-lrq7rxme>Likes Iniciales</label> <input type="number" id="likes" name="likes" min="0" placeholder="67" data-astro-cid-lrq7rxme> </div> </div> <div style="margin-top: 2rem;" data-astro-cid-lrq7rxme> <a href="/admin" class="btn btn-secondary" data-astro-cid-lrq7rxme>Cancelar</a> <button type="button" class="btn preview-btn" onclick="previewMarkdown()" data-astro-cid-lrq7rxme>Vista Previa</button> <button type="submit" class="btn" data-astro-cid-lrq7rxme>Crear Análisis</button> </div> </form> </div> </div> ${renderScript($$result, "/Users/jocelyncastro/Desktop/ProyectoSeries/series-guide/src/pages/admin/add-analysis.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "/Users/jocelyncastro/Desktop/ProyectoSeries/series-guide/src/pages/admin/add-analysis.astro", void 0);

const $$file = "/Users/jocelyncastro/Desktop/ProyectoSeries/series-guide/src/pages/admin/add-analysis.astro";
const $$url = "/admin/add-analysis";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AddAnalysis,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
