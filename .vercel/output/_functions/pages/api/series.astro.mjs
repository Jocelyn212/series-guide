import { r as requireAdmin } from '../../chunks/auth_BB3BAWhE.mjs';
import { f as insertSerie, h as updateSerie, j as deleteSerie } from '../../chunks/mongo_CASFip9t.mjs';
export { renderers } from '../../renderers.mjs';

const POST = async (context) => {
  try {
    requireAdmin(context);
    const data = await context.request.json();
    const serie = {
      title: data.title,
      slug: data.slug,
      description: data.description,
      genre: data.genre || [],
      network: data.network,
      startYear: parseInt(data.startYear),
      endYear: data.endYear ? parseInt(data.endYear) : void 0,
      totalSeasons: parseInt(data.totalSeasons),
      totalEpisodes: parseInt(data.totalEpisodes),
      status: data.status,
      imdbId: data.imdbId,
      imdbRating: parseFloat(data.imdbRating),
      posterUrl: data.posterUrl,
      backdropUrl: data.backdropUrl,
      platforms: data.platforms || [],
      createdAt: /* @__PURE__ */ new Date(),
      updatedAt: /* @__PURE__ */ new Date()
    };
    const id = await insertSerie(serie);
    return new Response(JSON.stringify({ success: true, id }), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    console.error("Error creating serie:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
};
const PUT = async (context) => {
  try {
    requireAdmin(context);
    const data = await context.request.json();
    const { id, ...serieData } = data;
    const updateData = {
      ...serieData,
      startYear: serieData.startYear ? parseInt(serieData.startYear) : void 0,
      endYear: serieData.endYear ? parseInt(serieData.endYear) : void 0,
      totalSeasons: serieData.totalSeasons ? parseInt(serieData.totalSeasons) : void 0,
      totalEpisodes: serieData.totalEpisodes ? parseInt(serieData.totalEpisodes) : void 0,
      imdbRating: serieData.imdbRating ? parseFloat(serieData.imdbRating) : void 0,
      updatedAt: /* @__PURE__ */ new Date()
    };
    Object.keys(updateData).forEach(
      (key) => updateData[key] === void 0 && delete updateData[key]
    );
    const success = await updateSerie(id, updateData);
    return new Response(JSON.stringify({ success }), {
      status: success ? 200 : 404,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    console.error("Error updating serie:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
};
const DELETE = async (context) => {
  try {
    requireAdmin(context);
    const { id } = await context.request.json();
    const success = await deleteSerie(id);
    return new Response(JSON.stringify({ success }), {
      status: success ? 200 : 404,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    console.error("Error deleting serie:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  DELETE,
  POST,
  PUT
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
