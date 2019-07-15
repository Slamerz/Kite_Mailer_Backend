require("dotenv").config();
const fastify = require("fastify")({
  logger: true
});
const mongoose = require("mongoose");
const swagger = require("./config/swagger");
const multer = require("fastify-multer");

const {DB_HOST, DB_USER, DB_PASS, PORT, HOST, AUTH} = process.env;


fastify.register(require("fastify-swagger"), swagger.options);
fastify.register(require("fastify-cors"),{});
fastify.register(require("fastify-jwt"),{
  secret: AUTH
});
fastify.register(multer.contentParser);

mongoose
  .connect(`mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/test`)
  .then(() => console.log("connected to mongodb"))
  .catch(err => console.log(err));

// Set routes
const routes = require("./routes");
routes.forEach((route, index) => {
  fastify.route(route);
});

fastify.get("/", async (request, reply) => {
  return { hello: "world" };
});

// Run the server!
const start = async () => {
  try {
    await fastify.listen(PORT|| 3000, HOST || "localhost");
    fastify.swagger();
    fastify.log.info(`listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

//nothing

start();
