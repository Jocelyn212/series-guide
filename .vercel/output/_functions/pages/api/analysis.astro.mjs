import { r as requireAdmin } from '../../chunks/auth_BB3BAWhE.mjs';
import { i as insertAnalisis, u as updateAnalisis, d as deleteAnalisis } from '../../chunks/mongo_CASFip9t.mjs';
export { renderers } from '../../renderers.mjs';

const POST = async (context) => {
  try {
    requireAdmin(context);
    const data = await context.request.json();
    const analisis = {
      title: data.title,
      slug: data.slug,
      content: data.content,
      excerpt: data.excerpt,
      universe: data.universe,
      tags: data.tags || [],
      author: data.author || { name: "Admin" },
      status: data.status || "published",
      readTime: data.readTime || 5,
      views: 0,
      likes: 0,
      createdAt: /* @__PURE__ */ new Date(),
      updatedAt: /* @__PURE__ */ new Date(),
      publishedAt: data.status === "published" ? /* @__PURE__ */ new Date() : void 0
    };
    const id = await insertAnalisis(analisis);
    return new Response(JSON.stringify({ success: true, id }), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    console.error("Error creating analisis:", error);
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
    const { id, ...analisisData } = data;
    const updateData = {
      ...analisisData,
      readTime: analisisData.readTime ? parseInt(analisisData.readTime) : void 0,
      updatedAt: /* @__PURE__ */ new Date()
    };
    if (updateData.status === "published") {
      updateData.publishedAt = /* @__PURE__ */ new Date();
    }
    Object.keys(updateData).forEach(
      (key) => updateData[key] === void 0 && delete updateData[key]
    );
    const success = await updateAnalisis(id, updateData);
    return new Response(JSON.stringify({ success }), {
      status: success ? 200 : 404,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    console.error("Error updating analisis:", error);
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
    const success = await deleteAnalisis(id);
    return new Response(JSON.stringify({ success }), {
      status: success ? 200 : 404,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    console.error("Error deleting analisis:", error);
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
