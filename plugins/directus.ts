import { createDirectus, rest, readItem, readItems } from "@directus/sdk";

const directus = createDirectus("http://127.0.0.1:8055").with(rest());

export default defineNuxtPlugin(() => {
  return {
    provide: { directus, readItem, readItems },
  };
});
