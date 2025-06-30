import { c as createComponent, r as renderHead, f as renderComponent, a as renderTemplate } from '../chunks/astro/server_sybGnmsI.mjs';
import 'kleur/colors';
import { S as SerieCard } from '../chunks/SerieCard_CefSAgM8.mjs';
import { g as getSeries } from '../chunks/mongo_CASFip9t.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Series = createComponent(async ($$result, $$props, $$slots) => {
  const seriesData = await getSeries();
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Series - Análisis de Series</title><meta name="description" content="Descubre análisis detallados de las mejores series de TV: Game of Thrones, Stranger Things, Fringe y más.">${renderHead()}</head> <body class="bg-gray-50">  <nav class="bg-white shadow-md"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex justify-between h-16"> <div class="flex items-center"> <a href="/" class="text-xl font-bold text-blue-600">📺 SeriesGuide</a> </div> <div class="flex items-center space-x-4"> <a href="/" class="text-gray-600 hover:text-blue-600 transition-colors">Inicio</a> <a href="/series" class="text-blue-600 font-medium">Series</a> </div> </div> </div> </nav> <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">  <div class="mb-8"> <h1 class="text-4xl font-bold text-gray-800 mb-4">
Catálogo de Series
</h1> <p class="text-gray-600 text-lg">
Explora análisis detallados de las series más populares y aclamadas de
          la televisión moderna.
</p> </div>  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"> <div class="bg-white p-6 rounded-lg shadow-md text-center"> <div class="text-3xl font-bold text-blue-600"> ${seriesData.length} </div> <div class="text-gray-600">Series Analizadas</div> </div> <div class="bg-white p-6 rounded-lg shadow-md text-center"> <div class="text-3xl font-bold text-green-600"> ${seriesData.filter((s) => s.status === "ongoing").length} </div> <div class="text-gray-600">En Emisión</div> </div> <div class="bg-white p-6 rounded-lg shadow-md text-center"> <div class="text-3xl font-bold text-purple-600"> ${seriesData.reduce(
    (total, serie) => total + serie.platforms.length,
    0
  )} </div> <div class="text-gray-600">Plataformas Disponibles</div> </div> </div>  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"> ${seriesData.map((serie) => renderTemplate`${renderComponent($$result, "SerieCard", SerieCard, { "title": serie.title, "description": serie.description, "genre": serie.genre, "network": serie.network, "startYear": serie.startYear, "endYear": serie.endYear, "status": serie.status, "imdbRating": serie.imdbRating, "posterUrl": serie.posterUrl, "platforms": serie.platforms, "slug": serie.slug })}`)} </div>  ${seriesData.length === 0 && renderTemplate`<div class="text-center py-12"> <div class="text-6xl mb-4">📺</div> <h3 class="text-xl font-semibold text-gray-600 mb-2">
No hay series disponibles
</h3> <p class="text-gray-500">
Ejecuta el script de población de datos para agregar series.
</p> </div>`} </main>  <footer class="bg-gray-800 text-white mt-16"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"> <div class="text-center"> <p>
&copy; 2024 SeriesGuide. Análisis profesional de series de
            televisión.
</p> </div> </div> </footer> </body></html>`;
}, "/Users/jocelyncastro/Desktop/ProyectoSeries/series-guide/src/pages/series.astro", void 0);

const $$file = "/Users/jocelyncastro/Desktop/ProyectoSeries/series-guide/src/pages/series.astro";
const $$url = "/series";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Series,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
