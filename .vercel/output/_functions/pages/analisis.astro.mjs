import { c as createComponent, r as renderHead, f as renderComponent, a as renderTemplate } from '../chunks/astro/server_sybGnmsI.mjs';
import 'kleur/colors';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { a as getAnalisis } from '../chunks/mongo_CASFip9t.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

function FringeCard({
  title,
  excerpt,
  description,
  universe,
  author,
  readTime,
  views: initialViews,
  likes: initialLikes,
  publishedAt,
  slug
}) {
  const [views, setViews] = useState(initialViews);
  const [likes, setLikes] = useState(initialLikes);
  const [hasLiked, setHasLiked] = useState(false);
  const [hasViewed, setHasViewed] = useState(false);
  const bgColor = universe === "blue" ? "bg-blue-600" : "bg-red-600";
  const badgeColor = universe === "blue" ? "bg-blue-100 text-blue-800" : "bg-red-100 text-red-800";
  const handleCardClick = () => {
    if (!hasViewed) {
      setViews((prev) => prev + 1);
      setHasViewed(true);
    }
  };
  const handleLike = (e) => {
    e.stopPropagation();
    if (hasLiked) {
      setLikes((prev) => prev - 1);
      setHasLiked(false);
    } else {
      setLikes((prev) => prev + 1);
      setHasLiked(true);
    }
  };
  return /* @__PURE__ */ jsxs(
    "article",
    {
      className: `${bgColor} rounded-lg p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer`,
      onClick: handleCardClick,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start mb-4", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold leading-tight", children: title }),
          /* @__PURE__ */ jsx("span", { className: `${badgeColor} px-3 py-1 rounded-full text-sm font-medium`, children: universe === "blue" ? "Universo Azul" : "Universo Rojo" })
        ] }),
        excerpt && /* @__PURE__ */ jsx("p", { className: "text-gray-200 text-sm mb-3 italic", children: excerpt }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-100 leading-relaxed mb-4 line-clamp-4", children: description }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center text-sm text-gray-300 border-t border-white/20 pt-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4", children: [
            author && /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
              author.avatar ? /* @__PURE__ */ jsx(
                "img",
                {
                  src: author.avatar,
                  alt: author.name,
                  className: "w-6 h-6 rounded-full",
                  onError: (e) => {
                    e.currentTarget.style.display = "none";
                    const initials = e.currentTarget.nextElementSibling;
                    if (initials) initials.style.display = "flex";
                  }
                }
              ) : null,
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold",
                  style: { display: author.avatar ? "none" : "flex" },
                  children: author.name.charAt(0).toUpperCase()
                }
              ),
              /* @__PURE__ */ jsx("span", { children: author.name })
            ] }),
            readTime && /* @__PURE__ */ jsxs("span", { children: [
              readTime,
              " min lectura"
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4", children: [
            /* @__PURE__ */ jsxs("span", { className: "flex items-center space-x-1", children: [
              /* @__PURE__ */ jsx("span", { children: "👁" }),
              /* @__PURE__ */ jsx("span", { className: hasViewed ? "font-bold" : "", children: views.toLocaleString() })
            ] }),
            /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: handleLike,
                className: `flex items-center space-x-1 transition-all duration-200 hover:scale-110 ${hasLiked ? "text-red-300" : "text-gray-300 hover:text-red-300"}`,
                children: [
                  /* @__PURE__ */ jsx(
                    "svg",
                    {
                      className: `w-4 h-4 ${hasLiked ? "fill-red-400 text-red-400" : "fill-none text-gray-300"}`,
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: /* @__PURE__ */ jsx(
                        "path",
                        {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                          d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsx("span", { className: hasLiked ? "font-bold" : "", children: likes })
                ]
              }
            ),
            publishedAt && /* @__PURE__ */ jsx("span", { children: publishedAt.toLocaleDateString("es-ES") })
          ] })
        ] })
      ]
    }
  );
}

const $$Analisis = createComponent(async ($$result, $$props, $$slots) => {
  const analisisData = await getAnalisis();
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Análisis de Series | SeriesGuide</title><meta name="description" content="Lee análisis profesionales y detallados de las mejores series de TV.">${renderHead()}</head> <body class="bg-gray-50">  <nav class="bg-white shadow-md"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex justify-between h-16"> <div class="flex items-center"> <a href="/" class="text-xl font-bold text-blue-600">📺 SeriesGuide</a> </div> <div class="flex items-center space-x-4"> <a href="/" class="text-gray-600 hover:text-blue-600 transition-colors">Series</a> <a href="/analisis" class="text-blue-600 font-medium">Análisis</a> </div> </div> </div> </nav> <main class="max-w-4xl mx-auto p-4"> <div class="text-center mb-8 mt-8"> <h1 class="text-4xl font-bold text-blue-600 mb-4">
Análisis Detallados
</h1> <p class="text-gray-600 text-lg max-w-2xl mx-auto">
Descubre análisis profundos, teorías fascinantes y interpretaciones
          expertas de episodios y temporadas completas.
</p> </div> <div class="mb-6"> <h2 class="text-2xl font-bold text-gray-800">
Últimos Análisis Publicados
</h2> <p class="text-gray-600">
Análisis frescos de los episodios y series más recientes
</p> </div> <div class="grid grid-cols-1 gap-6"> ${analisisData.map((item) => renderTemplate`${renderComponent($$result, "FringeCard", FringeCard, { "client:load": true, "title": item.title, "excerpt": item.excerpt, "description": item.content, "universe": item.universe || "blue", "author": item.author, "readTime": item.readTime, "views": item.views, "likes": item.likes, "publishedAt": item.publishedAt, "client:component-hydration": "load", "client:component-path": "/Users/jocelyncastro/Desktop/ProyectoSeries/series-guide/src/components/FringeCard", "client:component-export": "default" })}`)} </div>  ${analisisData.length === 0 && renderTemplate`<div class="text-center py-12"> <div class="text-6xl mb-4">📝</div> <h3 class="text-xl font-semibold text-gray-600 mb-2">
No hay análisis disponibles
</h3> <p class="text-gray-500">
Los análisis se publicarán próximamente.
</p> </div>`} </main>  <footer class="bg-gray-800 text-white mt-16"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"> <div class="text-center"> <p>
&copy; 2024 SeriesGuide. Análisis profesional de series de
            televisión.
</p> </div> </div> </footer> </body></html>`;
}, "/Users/jocelyncastro/Desktop/ProyectoSeries/series-guide/src/pages/analisis.astro", void 0);

const $$file = "/Users/jocelyncastro/Desktop/ProyectoSeries/series-guide/src/pages/analisis.astro";
const $$url = "/analisis";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Analisis,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
