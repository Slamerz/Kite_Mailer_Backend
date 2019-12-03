const usersRoutes = require("./users");
const ordersRoutes = require("./orders");
const contactRoutes = require("./contacts");
const authRoutes = require("./auth");
const pictureRoutes = require("./pictures");
const routes = [
  ...usersRoutes,
  ...ordersRoutes,
  ...authRoutes
];

module.exports = routes;
