import { c as createComponent, b as createAstro, r as renderHead, d as renderScript, a as renderTemplate } from '../../chunks/astro/server_sybGnmsI.mjs';
import 'kleur/colors';
import 'clsx';
import { g as getServerAuthUser } from '../../chunks/auth_BB3BAWhE.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$AddSerie = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AddSerie;
  const user = getServerAuthUser(Astro2.request);
  if (!user || user.role !== "admin") {
    return Astro2.redirect("/login");
  }
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Agregar Serie - Admin SeriesGuide</title><link rel="icon" type="image/svg+xml" href="/favicon.svg">${renderHead()}</head> <body class="bg-gray-900 min-h-screen"> <div class="container mx-auto px-4 py-8"> <!-- Header --> <div class="flex justify-between items-center mb-8"> <div> <h1 class="text-3xl font-bold text-white mb-2">
Agregar Nueva Serie
</h1> <p class="text-gray-400">
Completa los datos para agregar una nueva serie a la base de datos
</p> </div> <a href="/admin" class="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
← Volver al Panel
</a> </div> <!-- Alertas --> <div id="alertContainer" class="mb-6"></div> <!-- Formulario --> <div class="bg-gray-800 rounded-lg border border-gray-700 p-8"> <form id="serieForm" class="space-y-6"> <!-- Información Básica --> <div class="border-b border-gray-700 pb-6"> <h3 class="text-lg font-medium text-white mb-4">
Información Básica
</h3> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <div> <label for="title" class="block text-sm font-medium text-gray-300 mb-2">
Título <span class="text-red-400">*</span> </label> <input type="text" id="title" name="title" required class="w-full bg-gray-700 text-white rounded-lg px-4 py-3 border border-gray-600 focus:border-blue-500 focus:outline-none" placeholder="Ej: Game of Thrones"> </div> <div> <label for="slug" class="block text-sm font-medium text-gray-300 mb-2">
Slug <span class="text-red-400">*</span> </label> <input type="text" id="slug" name="slug" required class="w-full bg-gray-700 text-white rounded-lg px-4 py-3 border border-gray-600 focus:border-blue-500 focus:outline-none" placeholder="Se genera automáticamente" readonly> </div> </div> <div class="mt-6"> <label for="description" class="block text-sm font-medium text-gray-300 mb-2">
Descripción <span class="text-red-400">*</span> </label> <textarea id="description" name="description" required rows="4" class="w-full bg-gray-700 text-white rounded-lg px-4 py-3 border border-gray-600 focus:border-blue-500 focus:outline-none" placeholder="Descripción detallada de la serie..."></textarea> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6"> <div> <label for="genre" class="block text-sm font-medium text-gray-300 mb-2">
Géneros <span class="text-red-400">*</span> </label> <input type="text" id="genre" name="genre" required class="w-full bg-gray-700 text-white rounded-lg px-4 py-3 border border-gray-600 focus:border-blue-500 focus:outline-none" placeholder="Drama, Fantasía, Acción (separados por comas)"> </div> <div> <label for="network" class="block text-sm font-medium text-gray-300 mb-2">
Red/Canal <span class="text-red-400">*</span> </label> <input type="text" id="network" name="network" required class="w-full bg-gray-700 text-white rounded-lg px-4 py-3 border border-gray-600 focus:border-blue-500 focus:outline-none" placeholder="Ej: HBO, Netflix, Amazon Prime"> </div> </div> </div> <!-- Detalles de Producción --> <div class="border-b border-gray-700 pb-6"> <h3 class="text-lg font-medium text-white mb-4">
Detalles de Producción
</h3> <div class="grid grid-cols-2 md:grid-cols-4 gap-6"> <div> <label for="startYear" class="block text-sm font-medium text-gray-300 mb-2">
Año de Inicio <span class="text-red-400">*</span> </label> <input type="number" id="startYear" name="startYear" required min="1900" max="2030" class="w-full bg-gray-700 text-white rounded-lg px-4 py-3 border border-gray-600 focus:border-blue-500 focus:outline-none" placeholder="2011"> </div> <div> <label for="endYear" class="block text-sm font-medium text-gray-300 mb-2">
Año de Fin
</label> <input type="number" id="endYear" name="endYear" min="1900" max="2030" class="w-full bg-gray-700 text-white rounded-lg px-4 py-3 border border-gray-600 focus:border-blue-500 focus:outline-none" placeholder="2019"> </div> <div> <label for="totalSeasons" class="block text-sm font-medium text-gray-300 mb-2">
Temporadas <span class="text-red-400">*</span> </label> <input type="number" id="totalSeasons" name="totalSeasons" required min="1" class="w-full bg-gray-700 text-white rounded-lg px-4 py-3 border border-gray-600 focus:border-blue-500 focus:outline-none" placeholder="8"> </div> <div> <label for="totalEpisodes" class="block text-sm font-medium text-gray-300 mb-2">
Episodios <span class="text-red-400">*</span> </label> <input type="number" id="totalEpisodes" name="totalEpisodes" required min="1" class="w-full bg-gray-700 text-white rounded-lg px-4 py-3 border border-gray-600 focus:border-blue-500 focus:outline-none" placeholder="73"> </div> </div> <div class="mt-6"> <label for="status" class="block text-sm font-medium text-gray-300 mb-2">
Estado <span class="text-red-400">*</span> </label> <select id="status" name="status" required class="w-full bg-gray-700 text-white rounded-lg px-4 py-3 border border-gray-600 focus:border-blue-500 focus:outline-none"> <option value="">Selecciona el estado</option> <option value="ongoing">En emisión</option> <option value="ended">Finalizada</option> <option value="cancelled">Cancelada</option> </select> </div> </div> <!-- Información IMDB --> <div class="border-b border-gray-700 pb-6"> <h3 class="text-lg font-medium text-white mb-4">
Información IMDB
</h3> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <div> <label for="imdbId" class="block text-sm font-medium text-gray-300 mb-2">
IMDB ID <span class="text-red-400">*</span> </label> <input type="text" id="imdbId" name="imdbId" required class="w-full bg-gray-700 text-white rounded-lg px-4 py-3 border border-gray-600 focus:border-blue-500 focus:outline-none" placeholder="tt0944947"> </div> <div> <label for="imdbRating" class="block text-sm font-medium text-gray-300 mb-2">
Rating IMDB <span class="text-red-400">*</span> </label> <input type="number" id="imdbRating" name="imdbRating" required min="0" max="10" step="0.1" class="w-full bg-gray-700 text-white rounded-lg px-4 py-3 border border-gray-600 focus:border-blue-500 focus:outline-none" placeholder="9.2"> </div> </div> </div> <!-- Imágenes --> <div class="pb-6"> <h3 class="text-lg font-medium text-white mb-4">Imágenes</h3> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <div> <label for="posterUrl" class="block text-sm font-medium text-gray-300 mb-2">
URL del Poster
</label> <input type="url" id="posterUrl" name="posterUrl" class="w-full bg-gray-700 text-white rounded-lg px-4 py-3 border border-gray-600 focus:border-blue-500 focus:outline-none" placeholder="https://example.com/poster.jpg"> </div> <div> <label for="backdropUrl" class="block text-sm font-medium text-gray-300 mb-2">
URL del Backdrop
</label> <input type="url" id="backdropUrl" name="backdropUrl" class="w-full bg-gray-700 text-white rounded-lg px-4 py-3 border border-gray-600 focus:border-blue-500 focus:outline-none" placeholder="https://example.com/backdrop.jpg"> </div> </div> </div> <!-- Botones --> <div class="flex justify-end space-x-4 pt-6 border-t border-gray-700"> <button type="button" onclick="window.history.back()" class="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
Cancelar
</button> <button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
Agregar Serie
</button> </div> </form> </div> </div> ${renderScript($$result, "/Users/jocelyncastro/Desktop/ProyectoSeries/series-guide/src/pages/admin/add-serie.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "/Users/jocelyncastro/Desktop/ProyectoSeries/series-guide/src/pages/admin/add-serie.astro", void 0);

const $$file = "/Users/jocelyncastro/Desktop/ProyectoSeries/series-guide/src/pages/admin/add-serie.astro";
const $$url = "/admin/add-serie";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AddSerie,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
