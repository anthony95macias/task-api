import { serve } from "@hono/node-server";
import { notFound } from "stoker/middlewares";

import app from "../src/app.js";

const port = 3000;
// eslint-disable-next-line no-console
console.log(`Server is running on http://localhost:${port}`);

app.notFound(notFound);
serve({
  fetch: app.fetch,
  port,
});
