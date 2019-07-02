const usersRoutes = require("./users");
const ordersRoutes = require("./orders");
const contactRoutes = require("./contacts");
const routes = [
  ...usersRoutes,
  ...ordersRoutes,
  ...contactRoutes,
  {
    method: "POST",
    url: "/api/pictures",
    handler: async (req, reply) => {
      try {
        reply.send(req.body)
      } catch (err) {
        throw console.error(err);
      }
    }
  }
];

module.exports = routes;
