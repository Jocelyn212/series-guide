/// <reference types="astro/client" />

declare namespace ImportMeta {
  interface Env {
    readonly MONGODB_URI: string;
    readonly JWT_SECRET: string;
    readonly ADMIN_USERNAME: string;
    readonly ADMIN_PASSWORD: string;
  }
}
