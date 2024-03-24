const Koa = require("koa");
const logger = require("koa-logger");
const bodyParser = require("koa-bodyparser");
const cors = require("@koa/cors");
const dotenv = require("dotenv");
const corsOption = require("./config/cors");
const DBconnect = require("./src/database/db");
const router = require("./src/router/index");

dotenv.config();
DBconnect();

const app = new Koa();
const port = process.env.PORT || 3000;

//Middleware
app
  .use(logger())
  .use(bodyParser())
  .use(cors(corsOption))
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(port, () => {
  console.log(`Server is running on: http://localhost:${port}`);
});
