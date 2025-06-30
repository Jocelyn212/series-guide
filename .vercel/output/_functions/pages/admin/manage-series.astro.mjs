import { c as createComponent, b as createAstro, r as renderHead, d as renderScript, a as renderTemplate, e as addAttribute } from '../../chunks/astro/server_CPsB3qD4.mjs';
import { g as getServerAuthUser } from '../../chunks/auth_BB3BAWhE.mjs';
import { g as getSeries } from '../../chunks/mongo_CASFip9t.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$ManageSeries = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ManageSeries;
  const user = getServerAuthUser(Astro2.request);
  if (!user || user.role !== "admin") {
    return Astro2.redirect("/login");
  }
  let series = [];
  let error = "";
  try {
    series = await getSeries();
  } catch (err) {
    error = "Error cargando series";
  }
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Gestionar Series - Admin SeriesGuide</title>${renderHead()}</head> <body class="bg-gray-900 min-h-screen"> <div class="container mx-auto px-4 py-8"> <!-- Header --> <div class="flex justify-between items-center mb-8"> <div> <h1 class="text-3xl font-bold text-white mb-2">Gestionar Series</h1> <p class="text-gray-400">
Edita, elimina y administra las series existentes
</p> </div> <div class="flex gap-4"> <a href="/admin/add-serie" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
+ Nueva Serie
</a> <a href="/admin" class="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
← Volver
</a> </div> </div> <!-- Buscador --> <div class="mb-6"> <input type="text" id="search" placeholder="Buscar series por título, género, red..." class="w-full bg-gray-800 text-white rounded-lg px-4 py-3 border border-gray-700 focus:border-blue-500 focus:outline-none"> </div> <!-- Lista de Series --> ${error ? renderTemplate`<div class="bg-red-500 text-white p-4 rounded-lg mb-6">${error}</div>` : renderTemplate`<div class="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden"> <div class="overflow-x-auto"> <table class="w-full"> <thead class="bg-gray-700"> <tr> <th class="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
Serie
</th> <th class="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
Año
</th> <th class="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
Estado
</th> <th class="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
Rating
</th> <th class="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
Temporadas
</th> <th class="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
Acciones
</th> </tr> </thead> <tbody class="divide-y divide-gray-700" id="seriesTable"> ${series.map((serie) => renderTemplate`<tr class="hover:bg-gray-700 transition-colors serie-row"${addAttribute(JSON.stringify(serie), "data-serie")}> <td class="px-6 py-4 whitespace-nowrap"> <div class="flex items-center"> ${serie.posterUrl && renderTemplate`<img class="h-12 w-8 rounded object-cover mr-3"${addAttribute(serie.posterUrl, "src")}${addAttribute(serie.title, "alt")}>`} <div> <div class="text-sm font-medium text-white"> ${serie.title} </div> <div class="text-sm text-gray-400"> ${serie.network} </div> <div class="text-xs text-gray-500"> ${serie.genre.slice(0, 2).join(", ")} </div> </div> </div> </td> <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"> ${serie.startYear} ${serie.endYear && ` - ${serie.endYear}`} </td> <td class="px-6 py-4 whitespace-nowrap"> <span${addAttribute(`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${serie.status === "ongoing" ? "bg-green-900 text-green-200" : serie.status === "ended" ? "bg-blue-900 text-blue-200" : "bg-red-900 text-red-200"}`, "class")}> ${serie.status === "ongoing" ? "En emisi\xF3n" : serie.status === "ended" ? "Finalizada" : "Cancelada"} </span> </td> <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"> ${serie.imdbRating}/10
</td> <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300"> ${serie.totalSeasons} temp. / ${serie.totalEpisodes} ep.
</td> <td class="px-6 py-4 whitespace-nowrap text-sm"> <div class="flex space-x-2"> <button data-action="edit"${addAttribute(serie._id, "data-id")} class="bg-yellow-600 hover:bg-yellow-700 text-white px-3 py-1 rounded text-xs font-medium transition-colors">
Editar
</button> <button data-action="delete"${addAttribute(serie._id, "data-id")}${addAttribute(serie.title, "data-title")} class="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-xs font-medium transition-colors">
Eliminar
</button> <a${addAttribute(`/series/${serie.slug}`, "href")} target="_blank" class="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-xs font-medium transition-colors">
Ver
</a> </div> </td> </tr>`)} </tbody> </table> </div> </div>`} </div> <!-- Modal de Edición --> <div id="editModal" class="modal fixed inset-0 bg-black bg-opacity-50 items-center justify-center z-50"> <div class="bg-gray-800 rounded-lg p-6 w-full max-w-2xl mx-4 max-h-screen overflow-y-auto"> <div class="flex justify-between items-center mb-4"> <h2 class="text-xl font-bold text-white">Editar Serie</h2> <button onclick="closeEditModal()" class="text-gray-400 hover:text-white text-2xl">&times;</button> </div> <form id="editForm" class="space-y-4"> <input type="hidden" id="editId"> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> <div> <label class="block text-sm font-medium text-gray-300 mb-1">Título</label> <input type="text" id="editTitle" class="w-full bg-gray-700 text-white rounded px-3 py-2 border border-gray-600 focus:border-blue-500 focus:outline-none" required> </div> <div> <label class="block text-sm font-medium text-gray-300 mb-1">Slug</label> <input type="text" id="editSlug" class="w-full bg-gray-700 text-white rounded px-3 py-2 border border-gray-600 focus:border-blue-500 focus:outline-none" required> </div> </div> <div> <label class="block text-sm font-medium text-gray-300 mb-1">Descripción</label> <textarea id="editDescription" class="w-full bg-gray-700 text-white rounded px-3 py-2 border border-gray-600 focus:border-blue-500 focus:outline-none" rows="3"></textarea> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> <div> <label class="block text-sm font-medium text-gray-300 mb-1">Red/Canal</label> <input type="text" id="editNetwork" class="w-full bg-gray-700 text-white rounded px-3 py-2 border border-gray-600 focus:border-blue-500 focus:outline-none"> </div> <div> <label class="block text-sm font-medium text-gray-300 mb-1">Estado</label> <select id="editStatus" class="w-full bg-gray-700 text-white rounded px-3 py-2 border border-gray-600 focus:border-blue-500 focus:outline-none"> <option value="ongoing">En emisión</option> <option value="ended">Finalizada</option> <option value="cancelled">Cancelada</option> </select> </div> </div> <div class="grid grid-cols-2 md:grid-cols-4 gap-4"> <div> <label class="block text-sm font-medium text-gray-300 mb-1">Año inicio</label> <input type="number" id="editStartYear" class="w-full bg-gray-700 text-white rounded px-3 py-2 border border-gray-600 focus:border-blue-500 focus:outline-none"> </div> <div> <label class="block text-sm font-medium text-gray-300 mb-1">Año fin</label> <input type="number" id="editEndYear" class="w-full bg-gray-700 text-white rounded px-3 py-2 border border-gray-600 focus:border-blue-500 focus:outline-none"> </div> <div> <label class="block text-sm font-medium text-gray-300 mb-1">Temporadas</label> <input type="number" id="editTotalSeasons" class="w-full bg-gray-700 text-white rounded px-3 py-2 border border-gray-600 focus:border-blue-500 focus:outline-none"> </div> <div> <label class="block text-sm font-medium text-gray-300 mb-1">Episodios</label> <input type="number" id="editTotalEpisodes" class="w-full bg-gray-700 text-white rounded px-3 py-2 border border-gray-600 focus:border-blue-500 focus:outline-none"> </div> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> <div> <label class="block text-sm font-medium text-gray-300 mb-1">IMDB ID</label> <input type="text" id="editImdbId" class="w-full bg-gray-700 text-white rounded px-3 py-2 border border-gray-600 focus:border-blue-500 focus:outline-none"> </div> <div> <label class="block text-sm font-medium text-gray-300 mb-1">Rating IMDB</label> <input type="number" step="0.1" min="0" max="10" id="editImdbRating" class="w-full bg-gray-700 text-white rounded px-3 py-2 border border-gray-600 focus:border-blue-500 focus:outline-none"> </div> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> <div> <label class="block text-sm font-medium text-gray-300 mb-1">URL Poster</label> <input type="url" id="editPosterUrl" class="w-full bg-gray-700 text-white rounded px-3 py-2 border border-gray-600 focus:border-blue-500 focus:outline-none"> </div> <div> <label class="block text-sm font-medium text-gray-300 mb-1">URL Backdrop</label> <input type="url" id="editBackdropUrl" class="w-full bg-gray-700 text-white rounded px-3 py-2 border border-gray-600 focus:border-blue-500 focus:outline-none"> </div> </div> <div class="flex justify-end space-x-3 pt-4"> <button type="button" onclick="closeEditModal()" class="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded font-medium transition-colors">
Cancelar
</button> <button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-medium transition-colors">
Guardar Cambios
</button> </div> </form> </div> </div> ${renderScript($$result, "/Users/jocelyncastro/Desktop/ProyectoSeries/series-guide/src/pages/admin/manage-series.astro?astro&type=script&index=0&lang.ts")} </body> </html> <div class="stat-label">Finalizadas</div> <div class="stat-card"> <div class="stat-number"> ${Math.round(
    series.reduce((acc, s) => acc + s.imdbRating, 0) / series.length * 10
  ) / 10} </div> <div class="stat-label">Rating Promedio</div> </div> <div class="search-bar"> <input type="text" class="search-input" placeholder="Buscar series..." id="searchInput"> </div> <div class="series-grid" id="seriesGrid"> ${series.map((serie) => renderTemplate`<div class="serie-card"${addAttribute(serie.title.toLowerCase(), "data-title")}> ${serie.posterUrl ? renderTemplate`<img${addAttribute(serie.posterUrl, "src")}${addAttribute(serie.title, "alt")} class="serie-poster" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">` : null} <div class="no-image" style="display: none;">
📺
</div> <div class="serie-info"> <div class="serie-title">${serie.title}</div> <div class="serie-meta"> ${serie.startYear} ${serie.endYear ? ` - ${serie.endYear}` : ""} •${serie.network} • ⭐${" "} ${serie.imdbRating} </div> <div class="serie-meta"> ${serie.totalSeasons} temporada${serie.totalSeasons !== 1 ? "s" : ""}${" "}
•${serie.totalEpisodes} episodios •
<span${addAttribute(`color: ${serie.status === "ongoing" ? "#28a745" : serie.status === "ended" ? "#6c757d" : "#dc3545"}`, "style")}> ${serie.status === "ongoing" ? "En emisi\xF3n" : serie.status === "ended" ? "Finalizada" : "Cancelada"} </span> </div> <div class="serie-genres"> ${serie.genre.map((g) => renderTemplate`<span class="genre-tag">${g}</span>`)} </div> <div class="serie-actions"> <a${addAttribute(`/series/${serie.slug}`, "href")} class="btn-small btn-view" target="_blank">
Ver
</a> <button class="btn-small btn-edit"${addAttribute(`editSerie('${serie.slug}')`, "onclick")}>
Editar
</button> <button class="btn-small btn-delete"${addAttribute(`deleteSerie('${serie.slug}', '${serie.title}')`, "onclick")}>
Eliminar
</button> </div> </div> </div>`)} </div> ${renderScript($$result, "/Users/jocelyncastro/Desktop/ProyectoSeries/series-guide/src/pages/admin/manage-series.astro?astro&type=script&index=1&lang.ts")}`;
}, "/Users/jocelyncastro/Desktop/ProyectoSeries/series-guide/src/pages/admin/manage-series.astro", void 0);

const $$file = "/Users/jocelyncastro/Desktop/ProyectoSeries/series-guide/src/pages/admin/manage-series.astro";
const $$url = "/admin/manage-series";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ManageSeries,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
