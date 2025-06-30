import jwt from 'jsonwebtoken';

const JWT_SECRET = "your-jwt-secret-key";
function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded;
  } catch (error) {
    return null;
  }
}
function getAuthUser(context) {
  const authCookie = context.cookies.get("auth-token");
  if (!authCookie) {
    return null;
  }
  return verifyToken(authCookie.value);
}
function requireAuth(context) {
  const user = getAuthUser(context);
  if (!user) {
    throw new Response(
      JSON.stringify({
        success: false,
        message: "No autorizado"
      }),
      {
        status: 401,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
  return user;
}
function requireAdmin(context) {
  const user = requireAuth(context);
  if (user.role !== "admin") {
    throw new Response(
      JSON.stringify({
        success: false,
        message: "Acceso denegado - Se requieren permisos de administrador"
      }),
      {
        status: 403,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
  return user;
}
function getServerAuthUser(request) {
  const cookieHeader = request.headers.get("cookie");
  if (!cookieHeader) {
    return null;
  }
  const cookies = cookieHeader.split(";").reduce((acc, cookie) => {
    const [name, value] = cookie.trim().split("=");
    acc[name] = value;
    return acc;
  }, {});
  const token = cookies["auth-token"];
  if (!token) {
    return null;
  }
  return verifyToken(token);
}

export { getServerAuthUser as g, requireAdmin as r };
