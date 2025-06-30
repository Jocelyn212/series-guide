import { c as createComponent, b as createAstro, r as renderHead, d as renderScript, a as renderTemplate } from '../chunks/astro/server_CPsB3qD4.mjs';
import { g as getServerAuthUser } from '../chunks/auth_BB3BAWhE.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Login;
  const user = getServerAuthUser(Astro2.request);
  if (user && user.role === "admin") {
    return Astro2.redirect("/admin");
  }
  const title = "Iniciar Sesi\xF3n - Series Guide";
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title><link rel="icon" type="image/svg+xml" href="/favicon.svg">${renderHead()}</head> <body class="min-h-screen bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 flex items-center justify-center p-4"> <!-- Background Effects --> <div class="absolute inset-0 overflow-hidden"> <div class="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div> <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div> </div> <!-- Login Form --> <div class="relative z-10 bg-white/10 backdrop-blur-lg rounded-3xl p-8 w-full max-w-md border border-white/20 shadow-2xl"> <!-- Header --> <div class="text-center mb-8"> <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4"> <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path> </svg> </div> <h1 class="text-2xl font-bold text-white mb-2">Series Guide</h1> <p class="text-white/70">Panel de Administración</p> </div> <!-- Login Form --> <form id="loginForm" class="space-y-5"> <!-- Username Field --> <div class="space-y-2"> <label for="username" class="block text-sm font-medium text-white/90">
Usuario
</label> <div class="relative"> <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"> <svg class="h-4 w-4 text-white/50" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path> </svg> </div> <input type="text" id="username" name="username" required class="block w-full pl-10 pr-3 py-2.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200" placeholder="Ingresa tu usuario"> </div> </div> <!-- Password Field --> <div class="space-y-2"> <label for="password" class="block text-sm font-medium text-white/90">
Contraseña
</label> <div class="relative"> <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"> <svg class="h-4 w-4 text-white/50" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path> </svg> </div> <input type="password" id="password" name="password" required class="block w-full pl-10 pr-3 py-2.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200" placeholder="Ingresa tu contraseña"> </div> </div> <!-- Error Message --> <div id="errorMessage" class="hidden bg-red-500/20 border border-red-500/50 text-red-200 px-4 py-3 rounded-xl"> <div class="flex items-center"> <svg class="h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> <span id="errorText"></span> </div> </div> <!-- Submit Button --> <button type="submit" class="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2.5 px-4 rounded-xl transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent flex items-center justify-center" id="submitBtn"> <span id="submitText">Iniciar Sesión</span> <div id="submitLoader" class="hidden ml-2"> <svg class="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"> <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle> <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path> </svg> </div> </button> </form> <!-- Footer --> <div class="mt-8 text-center"> <a href="/" class="text-white/60 hover:text-white text-sm transition-colors duration-200">
← Volver al inicio
</a> </div> </div> ${renderScript($$result, "/Users/jocelyncastro/Desktop/ProyectoSeries/series-guide/src/pages/login.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "/Users/jocelyncastro/Desktop/ProyectoSeries/series-guide/src/pages/login.astro", void 0);

const $$file = "/Users/jocelyncastro/Desktop/ProyectoSeries/series-guide/src/pages/login.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
