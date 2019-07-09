require("dotenv").config();
const fastify = require("fastify")({
  logger: true
});
const mongoose = require("mongoose");
const swagger = require("./config/swagger");

const {DB_HOST, DB_USER, DB_PASS, PORT} = process.env;

// Register Swagger
fastify.register(require("fastify-swagger"), swagger.options);
// Connect to DB
mongoose
  .connect(`mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/test`)
  .then(() => console.log("connected to mongodb"))
  .catch(err => console.log(err));

// Set routes
const routes = require("./routes");
routes.forEach((route, index) => {
  fastify.route(route);
});
// Declare a route
fastify.get("/", async (request, reply) => {
  return { hello: "world" };
});

// Run the server!
const start = async () => {
  try {
    await fastify.listen(PORT|| 3000);
    fastify.swagger();
    fastify.log.info(`listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
