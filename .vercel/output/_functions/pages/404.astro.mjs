import { c as createComponent, r as renderHead, a as renderTemplate } from '../chunks/astro/server_CPsB3qD4.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>404 - Página no encontrada | SeriesGuide</title><meta name="description" content="La página que buscas no existe en SeriesGuide">${renderHead()}</head> <body class="bg-gray-50">  <nav class="bg-white shadow-md"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex justify-between h-16"> <div class="flex items-center"> <a href="/" class="text-xl font-bold text-blue-600">📺 SeriesGuide</a> </div> <div class="flex items-center space-x-4"> <a href="/" class="text-blue-600 font-medium">Series</a> <a href="/analisis" class="text-gray-600 hover:text-blue-600 transition-colors">Análisis</a> </div> </div> </div> </nav> <main class="min-h-screen flex items-center justify-center px-4"> <div class="text-center">  <div class="mb-8"> <div class="text-9xl mb-4">📺</div> <div class="text-6xl text-blue-600 font-bold mb-2">404</div> </div>  <h1 class="text-3xl font-bold text-gray-800 mb-4">
¡Ups! Página no encontrada
</h1> <p class="text-gray-600 text-lg mb-8 max-w-md mx-auto">
La página que buscas no existe o ha sido movida. Pero no te preocupes,
          tenemos muchas otras series increíbles para explorar.
</p>  <div class="flex flex-col sm:flex-row gap-4 justify-center items-center"> <a href="/" class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2">
🏠 Ir al Inicio
</a> <a href="/analisis" class="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2">
📖 Ver Análisis
</a> </div>  <div class="mt-12"> <h3 class="text-lg font-semibold text-gray-800 mb-4">
Series Populares
</h3> <div class="flex flex-wrap gap-2 justify-center"> <a href="/series/game-of-thrones" class="bg-blue-100 text-blue-800 px-3 py-1 rounded-md text-sm font-medium hover:bg-blue-200 transition-colors">
Game of Thrones
</a> <a href="/series/house-of-the-dragon" class="bg-purple-100 text-purple-800 px-3 py-1 rounded-md text-sm font-medium hover:bg-purple-200 transition-colors">
House of the Dragon
</a> <a href="/series/stranger-things" class="bg-red-100 text-red-800 px-3 py-1 rounded-md text-sm font-medium hover:bg-red-200 transition-colors">
Stranger Things
</a> <a href="/series/the-boys" class="bg-green-100 text-green-800 px-3 py-1 rounded-md text-sm font-medium hover:bg-green-200 transition-colors">
The Boys
</a> <a href="/series/severance" class="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-md text-sm font-medium hover:bg-yellow-200 transition-colors">
Severance
</a> </div> </div> </div> </main>  <footer class="bg-gray-800 text-white"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"> <div class="text-center"> <p>
&copy; 2024 SeriesGuide. Análisis profesional de series de
            televisión.
</p> </div> </div> </footer> </body></html>`;
}, "/Users/jocelyncastro/Desktop/ProyectoSeries/series-guide/src/pages/404.astro", void 0);

const $$file = "/Users/jocelyncastro/Desktop/ProyectoSeries/series-guide/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
