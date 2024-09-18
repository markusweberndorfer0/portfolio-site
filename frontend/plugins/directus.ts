import { createDirectus, rest, readItem, readItems } from "@directus/sdk";

// For docker development: directus
// For native development: localhost

const directus = createDirectus(
  process.env.DIRECTUS_URL ?? "https://directus.weberndorfer.eu"
).with(rest());

export default defineNuxtPlugin(() => {
  return {
    provide: { directus, readItem, readItems },
  };
});
