const usersRoutes = require("./users");
const ordersRoutes = require("./orders");

const routes = [...usersRoutes, ...ordersRoutes];

module.exports = routes;
