import { c as createComponent, b as createAstro, e as addAttribute, r as renderHead, a as renderTemplate, f as renderComponent } from '../../chunks/astro/server_sybGnmsI.mjs';
import 'kleur/colors';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
import { k as getSerieBySlug, l as getAnalisisBySerie } from '../../chunks/mongo_CASFip9t.mjs';
/* empty css                                       */
export { renderers } from '../../renderers.mjs';

function FullAnalysisCard({
  title,
  excerpt,
  content,
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
  useState(() => {
    if (!hasViewed) {
      setViews((prev) => prev + 1);
      setHasViewed(true);
    }
  });
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
  const formattedContent = content.split("\n\n").map((paragraph, index) => {
    if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
      const title2 = paragraph.replace(/\*\*/g, "");
      return /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-gray-800 mt-8 mb-4 first:mt-0", children: title2 }, index);
    }
    return /* @__PURE__ */ jsx("p", { className: "text-gray-700 leading-relaxed mb-4", children: paragraph }, index);
  });
  return /* @__PURE__ */ jsxs("article", { className: "bg-white rounded-lg shadow-lg overflow-hidden", children: [
    /* @__PURE__ */ jsxs("div", { className: `${bgColor} p-6 text-white`, children: [
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start mb-4", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold leading-tight pr-4", children: title }),
        /* @__PURE__ */ jsx("span", { className: `${badgeColor} px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap`, children: universe === "blue" ? "Universo Azul" : "Universo Rojo" })
      ] }),
      excerpt && /* @__PURE__ */ jsx("p", { className: "text-gray-200 text-lg italic", children: excerpt }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-4 mt-4 text-sm text-gray-300", children: [
        author && /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
          author.avatar ? /* @__PURE__ */ jsx(
            "img",
            {
              src: author.avatar,
              alt: author.name,
              className: "w-8 h-8 rounded-full border-2 border-white/20",
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
              className: "w-8 h-8 rounded-full border-2 border-white/20 bg-white/20 flex items-center justify-center text-sm font-bold",
              style: { display: author.avatar ? "none" : "flex" },
              children: author.name.charAt(0).toUpperCase()
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "font-medium", children: author.name })
        ] }),
        readTime && /* @__PURE__ */ jsxs("span", { children: [
          "📖 ",
          readTime,
          " min de lectura"
        ] }),
        publishedAt && /* @__PURE__ */ jsxs("span", { children: [
          "📅 ",
          publishedAt.toLocaleDateString("es-ES")
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "p-8", children: /* @__PURE__ */ jsx("div", { className: "prose max-w-none", children: formattedContent }) }),
    /* @__PURE__ */ jsx("div", { className: "px-8 py-6 bg-gray-50 border-t", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ jsx("div", { className: "flex items-center space-x-6 text-sm text-gray-600", children: /* @__PURE__ */ jsxs("span", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ jsxs("svg", { className: "w-5 h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: [
          /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z" }),
          /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" })
        ] }),
        /* @__PURE__ */ jsxs("span", { className: hasViewed ? "font-semibold text-blue-600" : "", children: [
          views.toLocaleString(),
          " visualizaciones"
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: handleLike,
          className: `flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-200 hover:scale-105 ${hasLiked ? "bg-red-100 text-red-600 hover:bg-red-200" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`,
          children: [
            /* @__PURE__ */ jsx(
              "svg",
              {
                className: `w-5 h-5 ${hasLiked ? "fill-current" : "fill-none"}`,
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
            /* @__PURE__ */ jsxs("span", { className: hasLiked ? "font-semibold" : "", children: [
              likes,
              " me gusta"
            ] })
          ]
        }
      )
    ] }) })
  ] });
}

const $$Astro = createAstro();
async function getStaticPaths() {
  return [
    { params: { slug: "fringe" } },
    { params: { slug: "game-of-thrones" } },
    { params: { slug: "stranger-things" } },
    { params: { slug: "the-walking-dead" } },
    { params: { slug: "wednesday" } },
    { params: { slug: "la-casa-de-papel" } },
    { params: { slug: "the-last-of-us" } },
    { params: { slug: "house-of-the-dragon" } },
    { params: { slug: "the-boys" } },
    { params: { slug: "the-white-lotus" } },
    { params: { slug: "the-mandalorian" } },
    { params: { slug: "yellowjackets" } },
    { params: { slug: "andor" } },
    { params: { slug: "severance" } },
    { params: { slug: "the-bear" } },
    { params: { slug: "shogun" } },
    { params: { slug: "reacher" } }
  ];
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const serie = await getSerieBySlug(slug);
  const analisis = await getAnalisisBySerie(slug);
  if (!serie) {
    return Astro2.redirect("/404");
  }
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${serie.title} - Análisis | SeriesGuide</title><meta name="description"${addAttribute(`An\xE1lisis detallados de ${serie.title}. ${serie.description}`, "content")}>${renderHead()}</head> <body class="bg-gray-50">  <nav class="bg-white shadow-md"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex justify-between h-16"> <div class="flex items-center"> <a href="/" class="text-xl font-bold text-blue-600">📺 SeriesGuide</a> </div> <div class="flex items-center space-x-4"> <a href="/" class="text-gray-600 hover:text-blue-600 transition-colors">Series</a> <a href="/analisis" class="text-gray-600 hover:text-blue-600 transition-colors">Análisis</a> </div> </div> </div> </nav> <main class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">  <div class="bg-white rounded-xl shadow-lg overflow-hidden mb-8"> <div class="md:flex"> <div class="md:w-1/3"> ${serie.posterUrl ? renderTemplate`<img${addAttribute(serie.posterUrl, "src")}${addAttribute(serie.title, "alt")} class="w-full h-64 md:h-full object-cover">` : renderTemplate`<div class="w-full h-64 md:h-full bg-gray-200 flex items-center justify-center"> <span class="text-6xl">🎬</span> </div>`} </div> <div class="md:w-2/3 p-8"> <div class="flex items-center gap-4 mb-4"> <h1 class="text-3xl font-bold text-gray-800">${serie.title}</h1> <span class="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
⭐ ${serie.imdbRating} </span> </div> <div class="flex flex-wrap gap-2 mb-4"> ${serie.genre.map((g) => renderTemplate`<span class="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-sm font-medium"> ${g} </span>`)} </div> <p class="text-gray-600 mb-4">${serie.description}</p> <div class="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-4"> <div><strong>Red:</strong> ${serie.network}</div> <div> <strong>Años:</strong> ${serie.startYear}${serie.endYear ? `-${serie.endYear}` : ""} </div> <div><strong>Temporadas:</strong> ${serie.totalSeasons}</div> <div><strong>Episodios:</strong> ${serie.totalEpisodes}</div> </div> <div class="mb-4"> <p class="text-sm text-gray-500 mb-2">Disponible en:</p> <div class="flex flex-wrap gap-2"> ${serie.platforms.map((platform) => renderTemplate`<span${addAttribute(`px-3 py-1 rounded-md text-sm font-medium ${platform.isPremium ? "bg-purple-100 text-purple-800" : "bg-green-100 text-green-800"}`, "class")}> ${platform.name} ${platform.isPremium && " \u{1F48E}"} </span>`)} </div> </div> </div> </div> </div>  <div class="mb-8"> <h2 class="text-2xl font-bold text-gray-800 mb-4">
Análisis de ${serie.title} </h2> <p class="text-gray-600 mb-6">
Análisis detallados de episodios, teorías y interpretaciones de esta
          serie.
</p> ${analisis.length > 0 ? renderTemplate`<div class="space-y-8"> ${analisis.map((item) => renderTemplate`${renderComponent($$result, "FullAnalysisCard", FullAnalysisCard, { "client:load": true, "title": item.title, "excerpt": item.excerpt, "content": item.content, "universe": item.universe || "blue", "author": item.author, "readTime": item.readTime, "views": item.views, "likes": item.likes, "publishedAt": item.publishedAt, "slug": item.slug, "client:component-hydration": "load", "client:component-path": "/Users/jocelyncastro/Desktop/ProyectoSeries/series-guide/src/components/FullAnalysisCard", "client:component-export": "default" })}`)} </div>` : renderTemplate`<div class="text-center py-12 bg-white rounded-lg"> <div class="text-6xl mb-4">📝</div> <h3 class="text-xl font-semibold text-gray-600 mb-2">
Análisis próximamente
</h3> <p class="text-gray-500">
Estamos preparando análisis detallados de ${serie.title}. ¡Vuelve
                pronto!
</p> </div>`} </div> </main>  <footer class="bg-gray-800 text-white mt-16"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"> <div class="text-center"> <p>
&copy; 2024 SeriesGuide. Análisis profesional de series de
            televisión.
</p> </div> </div> </footer> </body></html>`;
}, "/Users/jocelyncastro/Desktop/ProyectoSeries/series-guide/src/pages/series/[slug].astro", void 0);

const $$file = "/Users/jocelyncastro/Desktop/ProyectoSeries/series-guide/src/pages/series/[slug].astro";
const $$url = "/series/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
