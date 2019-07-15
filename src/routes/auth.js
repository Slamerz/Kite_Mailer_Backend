const authController = require("../controllers/authController");

const authRoutes = [
    {
        method: "POST",
        url: "/api/auth",
        handler: authController.authUser
    }
];

module.exports = authRoutes;