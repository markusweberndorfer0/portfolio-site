import { createDirectus, rest, readItem, readItems } from "@directus/sdk";

// For docker development: host.docker.internal
// For native development: localhost

const directus = createDirectus("http://host.docker.internal/api").with(rest());

export default defineNuxtPlugin(() => {
  return {
    provide: { directus, readItem, readItems },
  };
});
