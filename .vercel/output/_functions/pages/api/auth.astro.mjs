import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { b as getUserByCredentials, e as updateLastLogin } from '../../chunks/mongo_CASFip9t.mjs';
export { renderers } from '../../renderers.mjs';

const JWT_SECRET = "your-jwt-secret-key";
const POST = async ({ request }) => {
  try {
    const { username, password } = await request.json();
    if (!username || !password) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Username y password son requeridos"
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    const user = await getUserByCredentials(username);
    if (!user) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Credenciales inválidas"
        }),
        {
          status: 401,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Credenciales inválidas"
        }),
        {
          status: 401,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    if (!user.isActive) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Usuario inactivo"
        }),
        {
          status: 403,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    if (user._id) {
      await updateLastLogin(user._id);
    }
    const token = jwt.sign(
      {
        userId: user._id,
        username: user.username,
        role: user.role
      },
      JWT_SECRET,
      { expiresIn: "24h" }
    );
    const userData = {
      id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
      isActive: user.isActive
    };
    return new Response(
      JSON.stringify({
        success: true,
        message: "Login exitoso",
        user: userData,
        token
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Set-Cookie": `auth-token=${token}; HttpOnly; Path=/; Max-Age=${24 * 60 * 60}; SameSite=Strict`
        }
      }
    );
  } catch (error) {
    console.error("Error en login:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Error interno del servidor"
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
};
const DELETE = async () => {
  return new Response(
    JSON.stringify({
      success: true,
      message: "Logout exitoso"
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Set-Cookie": "auth-token=; HttpOnly; Path=/; Max-Age=0; SameSite=Strict"
      }
    }
  );
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  DELETE,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
