import { createClient } from 'contentful';

export const client = createClient({
  // Vite utiliza import.meta.env para acceder a las variables del .env
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});