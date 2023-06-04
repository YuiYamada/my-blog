// libs/client.js
import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "bofj6628oy",
  apiKey: process.env.API_KEY,
});
