import Koa from "koa";
import logger from "koa-logger";
import bodyParser from "koa-bodyparser";
import cors from "@koa/cors";
import dotenv from "dotenv";
import corsOption from "./config/cors.js";
import DBconnect from "./src/database/db.js";
import { routes, allowedMethods } from "./src/router/index.js";

const app = new Koa();
const port = process.env.PORT || 3000;
dotenv.config();
//database connection
DBconnect();

//Middleware
app
  .use(logger())
  .use(bodyParser())
  .use(cors(corsOption))
  .use(routes())
  .use(allowedMethods());

app.listen(port, () => {
  console.log(`Server is running on: http://localhost:${port}`);
});
