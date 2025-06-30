import { c as createComponent, r as renderHead, f as renderComponent, a as renderTemplate } from '../chunks/astro/server_sybGnmsI.mjs';
import 'kleur/colors';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { S as SerieCard } from '../chunks/SerieCard_CefSAgM8.mjs';
import { g as getSeries } from '../chunks/mongo_CASFip9t.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

function SeriesFilter({ series, onFilteredSeriesChange }) {
  const [activeFilter, setActiveFilter] = useState("all");
  const allGenres = Array.from(
    new Set(series.flatMap((serie) => serie.genre))
  ).sort();
  const allPlatforms = Array.from(
    new Set(series.flatMap((serie) => serie.platforms.map((p) => p.name)))
  ).sort();
  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    let filteredSeries = series;
    switch (filter) {
      case "all":
        filteredSeries = series;
        break;
      case "ongoing":
        filteredSeries = series.filter((serie) => serie.status === "ongoing");
        break;
      case "ended":
        filteredSeries = series.filter((serie) => serie.status === "ended");
        break;
      case "cancelled":
        filteredSeries = series.filter((serie) => serie.status === "cancelled");
        break;
      default:
        if (allGenres.includes(filter)) {
          filteredSeries = series.filter(
            (serie) => serie.genre.some((g) => g.toLowerCase() === filter.toLowerCase())
          );
        } else if (allPlatforms.includes(filter)) {
          filteredSeries = series.filter(
            (serie) => serie.platforms.some((p) => p.name === filter)
          );
        }
        break;
    }
    onFilteredSeriesChange(filteredSeries);
  };
  const filters = [
    { key: "all", label: "Todas", count: series.length },
    { key: "ongoing", label: "En Emisión", count: series.filter((s) => s.status === "ongoing").length },
    { key: "ended", label: "Finalizadas", count: series.filter((s) => s.status === "ended").length },
    { key: "cancelled", label: "Canceladas", count: series.filter((s) => s.status === "cancelled").length }
  ];
  const mainGenres = ["Drama", "Sci-Fi", "Fantasy", "Crime", "Comedy", "Horror", "Thriller"];
  const genreFilters = mainGenres.filter((genre) => allGenres.some((g) => g.toLowerCase().includes(genre.toLowerCase()))).map((genre) => ({
    key: genre,
    label: genre,
    count: series.filter(
      (s) => s.genre.some((g) => g.toLowerCase().includes(genre.toLowerCase()))
    ).length
  })).filter((filter) => filter.count > 0);
  const mainPlatforms = ["Netflix", "HBO Max", "Prime Video", "Disney+", "Apple TV+"];
  const platformFilters = mainPlatforms.filter((platform) => allPlatforms.includes(platform)).map((platform) => ({
    key: platform,
    label: platform,
    count: series.filter(
      (s) => s.platforms.some((p) => p.name === platform)
    ).length
  })).filter((filter) => filter.count > 0);
  const allFilters = [...filters, ...genreFilters, ...platformFilters];
  return /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-gray-800 mb-4 text-center", children: "Filtrar Series" }),
      /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsx("h4", { className: "text-sm font-medium text-gray-600 mb-3", children: "Por Estado:" }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 justify-center", children: filters.map((filter) => /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => handleFilterChange(filter.key),
            className: `px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${activeFilter === filter.key ? "bg-blue-600 text-white shadow-lg transform scale-105" : "bg-gray-200 text-gray-700 hover:bg-gray-300 hover:shadow-md"}`,
            children: [
              filter.label,
              /* @__PURE__ */ jsxs("span", { className: "ml-1 text-xs opacity-75", children: [
                "(",
                filter.count,
                ")"
              ] })
            ]
          },
          filter.key
        )) })
      ] }),
      genreFilters.length > 0 && /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsx("h4", { className: "text-sm font-medium text-gray-600 mb-3", children: "Por Género:" }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 justify-center", children: genreFilters.map((filter) => /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => handleFilterChange(filter.key),
            className: `px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 ${activeFilter === filter.key ? "bg-purple-600 text-white shadow-lg transform scale-105" : "bg-purple-100 text-purple-700 hover:bg-purple-200 hover:shadow-md"}`,
            children: [
              filter.label,
              /* @__PURE__ */ jsxs("span", { className: "ml-1 text-xs opacity-75", children: [
                "(",
                filter.count,
                ")"
              ] })
            ]
          },
          filter.key
        )) })
      ] }),
      platformFilters.length > 0 && /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsx("h4", { className: "text-sm font-medium text-gray-600 mb-3", children: "Por Plataforma:" }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 justify-center", children: platformFilters.map((filter) => /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => handleFilterChange(filter.key),
            className: `px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 ${activeFilter === filter.key ? "bg-green-600 text-white shadow-lg transform scale-105" : "bg-green-100 text-green-700 hover:bg-green-200 hover:shadow-md"}`,
            children: [
              filter.label,
              /* @__PURE__ */ jsxs("span", { className: "ml-1 text-xs opacity-75", children: [
                "(",
                filter.count,
                ")"
              ] })
            ]
          },
          filter.key
        )) })
      ] })
    ] }),
    activeFilter !== "all" && /* @__PURE__ */ jsxs("div", { className: "text-center mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200", children: [
      /* @__PURE__ */ jsxs("span", { className: "text-sm text-blue-700", children: [
        "📊 Mostrando series filtradas por: ",
        /* @__PURE__ */ jsx("span", { className: "font-semibold text-blue-800", children: allFilters.find((f) => f.key === activeFilter)?.label })
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => handleFilterChange("all"),
          className: "ml-3 text-xs text-blue-600 hover:text-blue-800 underline",
          children: "Limpiar filtros"
        }
      )
    ] })
  ] });
}

function SearchBar({ onSearch, placeholder = "Buscar series..." }) {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };
  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };
  const clearSearch = () => {
    setSearchQuery("");
    onSearch("");
  };
  return /* @__PURE__ */ jsx("div", { className: "mb-6", children: /* @__PURE__ */ jsx("form", { onSubmit: handleSearch, className: "max-w-md mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "text",
        value: searchQuery,
        onChange: handleInputChange,
        placeholder,
        className: "w-full px-4 py-3 pl-10 pr-10 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none", children: /* @__PURE__ */ jsx("svg", { className: "h-5 w-5 text-gray-400", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" }) }) }),
    searchQuery && /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        onClick: clearSearch,
        className: "absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors",
        children: /* @__PURE__ */ jsx("svg", { className: "h-5 w-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) })
      }
    )
  ] }) }) });
}

function SeriesGrid({ initialSeries }) {
  const [filteredSeries, setFilteredSeries] = useState(initialSeries);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentFilter, setCurrentFilter] = useState(initialSeries);
  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredSeries(currentFilter);
      return;
    }
    const searchResults = currentFilter.filter(
      (serie) => serie.title.toLowerCase().includes(searchQuery.toLowerCase()) || serie.description.toLowerCase().includes(searchQuery.toLowerCase()) || serie.genre.some((g) => g.toLowerCase().includes(searchQuery.toLowerCase())) || serie.network.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredSeries(searchResults);
  }, [searchQuery, currentFilter]);
  const handleFilteredSeriesChange = (series) => {
    setCurrentFilter(series);
    if (searchQuery.trim()) {
      const searchResults = series.filter(
        (serie) => serie.title.toLowerCase().includes(searchQuery.toLowerCase()) || serie.description.toLowerCase().includes(searchQuery.toLowerCase()) || serie.genre.some((g) => g.toLowerCase().includes(searchQuery.toLowerCase())) || serie.network.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredSeries(searchResults);
    } else {
      setFilteredSeries(series);
    }
  };
  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(SearchBar, { onSearch: handleSearch, placeholder: "Buscar por título, género, cadena..." }),
    /* @__PURE__ */ jsx(
      SeriesFilter,
      {
        series: initialSeries,
        onFilteredSeriesChange: handleFilteredSeriesChange
      }
    ),
    (searchQuery || filteredSeries.length !== initialSeries.length) && /* @__PURE__ */ jsx("div", { className: "mb-6 text-center", children: /* @__PURE__ */ jsxs("p", { className: "text-gray-600", children: [
      "Mostrando ",
      /* @__PURE__ */ jsx("span", { className: "font-semibold text-blue-600", children: filteredSeries.length }),
      " de ",
      /* @__PURE__ */ jsx("span", { className: "font-semibold", children: initialSeries.length }),
      " series",
      searchQuery && /* @__PURE__ */ jsxs("span", { className: "text-sm text-gray-500 block mt-1", children: [
        'Resultados para: "',
        /* @__PURE__ */ jsx("span", { className: "italic", children: searchQuery }),
        '"'
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6", children: filteredSeries.map((serie) => /* @__PURE__ */ jsx(
      SerieCard,
      {
        title: serie.title,
        description: serie.description,
        genre: serie.genre,
        network: serie.network,
        startYear: serie.startYear,
        endYear: serie.endYear,
        status: serie.status,
        imdbRating: serie.imdbRating,
        posterUrl: serie.posterUrl,
        platforms: serie.platforms,
        slug: serie.slug
      },
      serie.slug
    )) }),
    filteredSeries.length === 0 && /* @__PURE__ */ jsxs("div", { className: "text-center py-12", children: [
      /* @__PURE__ */ jsx("div", { className: "text-6xl mb-4", children: searchQuery ? "🔍" : "📺" }),
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-600 mb-2", children: searchQuery ? "No se encontraron resultados" : "No hay series disponibles" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-500", children: searchQuery ? "Prueba con otros términos de búsqueda o ajusta los filtros." : "Prueba con otros filtros para ver más resultados." }),
      searchQuery && /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => handleSearch(""),
          className: "mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors",
          children: "Limpiar búsqueda"
        }
      )
    ] })
  ] });
}

function StatsDisplay({ series }) {
  const ongoingSeries = series.filter((s) => s.status === "ongoing").length;
  const totalPlatforms = new Set(series.flatMap((s) => s.platforms.map((p) => p.name))).size;
  const averageRating = series.length > 0 ? (series.reduce((sum, s) => sum + s.imdbRating, 0) / series.length).toFixed(1) : "0.0";
  const totalGenres = new Set(series.flatMap((s) => s.genre)).size;
  const stats = [
    {
      value: series.length,
      label: "Series Analizadas",
      icon: "🎬",
      color: "bg-blue-500"
    },
    {
      value: ongoingSeries,
      label: "En Emisión",
      icon: "📺",
      color: "bg-green-500"
    },
    {
      value: totalPlatforms,
      label: "Plataformas",
      icon: "🎯",
      color: "bg-purple-500"
    },
    {
      value: averageRating,
      label: "Rating Promedio",
      icon: "⭐",
      color: "bg-yellow-500"
    },
    {
      value: totalGenres,
      label: "Géneros",
      icon: "🎭",
      color: "bg-pink-500"
    }
  ];
  return /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto", children: stats.map((stat, index) => /* @__PURE__ */ jsxs(
    "div",
    {
      className: "bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 text-center",
      children: [
        /* @__PURE__ */ jsx("div", { className: `${stat.color} w-12 h-12 rounded-full flex items-center justify-center text-white text-xl mx-auto mb-2`, children: stat.icon }),
        /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-gray-800 mb-1", children: stat.value }),
        /* @__PURE__ */ jsx("div", { className: "text-gray-600 text-sm", children: stat.label })
      ]
    },
    index
  )) });
}

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const seriesData = await getSeries();
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>SeriesGuide - Análisis Profesionales de Series</title><meta name="description" content="Descubre análisis detallados de las mejores series de TV: House of the Dragon, The Boys, Stranger Things, Severance y más.">${renderHead()}</head> <body class="bg-gray-50">  <nav class="bg-white shadow-md"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex justify-between h-16"> <div class="flex items-center"> <a href="/" class="text-xl font-bold text-blue-600">📺 SeriesGuide</a> </div> <div class="flex items-center space-x-4"> <a href="/" class="text-blue-600 font-medium">Series</a> <a href="/analisis" class="text-gray-600 hover:text-blue-600 transition-colors">Análisis</a> </div> </div> </div> </nav> <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">  <div class="text-center mb-12"> <h1 class="text-5xl font-bold text-gray-800 mb-4">
Análisis Profesionales de Series
</h1> <p class="text-gray-600 text-xl max-w-3xl mx-auto mb-8">
Explora análisis detallados, teorías fascinantes y interpretaciones
          profundas de las series más populares y aclamadas de la televisión
          moderna.
</p>  ${renderComponent($$result, "StatsDisplay", StatsDisplay, { "client:load": true, "series": seriesData, "client:component-hydration": "load", "client:component-path": "/Users/jocelyncastro/Desktop/ProyectoSeries/series-guide/src/components/StatsDisplay", "client:component-export": "default" })} </div>  ${renderComponent($$result, "SeriesGrid", SeriesGrid, { "client:load": true, "initialSeries": seriesData, "client:component-hydration": "load", "client:component-path": "/Users/jocelyncastro/Desktop/ProyectoSeries/series-guide/src/components/SeriesGrid", "client:component-export": "default" })}  ${seriesData.length === 0 && renderTemplate`<div class="text-center py-12"> <div class="text-6xl mb-4">📺</div> <h3 class="text-xl font-semibold text-gray-600 mb-2">
No hay series disponibles
</h3> <p class="text-gray-500">
Ejecuta el script de población de datos para agregar series.
</p> </div>`} </main>  <footer class="bg-gray-800 text-white mt-16"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"> <div class="text-center"> <p>
&copy; 2024 SeriesGuide. Análisis profesional de series de
            televisión.
</p> <div class="mt-4"> <a href="/login" class="text-gray-400 hover:text-white text-sm transition-colors" title="Acceso administrativo">
Admin
</a> </div> </div> </div> </footer> </body></html>`;
}, "/Users/jocelyncastro/Desktop/ProyectoSeries/series-guide/src/pages/index.astro", void 0);

const $$file = "/Users/jocelyncastro/Desktop/ProyectoSeries/series-guide/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
