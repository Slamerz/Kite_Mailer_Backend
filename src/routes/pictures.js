const multer = require("fastify-multer");
const upload = multer({ dest: "src/public/images" });
const path = require("path");

const pictureRoutes = [
  {
    method: "POST",
    url: "/api/pictures",
    preHandler: upload.any(),
    handler: async (req, reply) => {
      try {
        console.log(req);
        reply.code(200).send("SUCCESS");
      } catch (err) {
        throw console.error(err);
      }
    }
  },
  {
    method: "DELETE",
    url: "/api/pictures",
    handler: async (req, reply) => {
      console.log(req);
    }
  },
  {
    method: "GET",
    url: "/api/pictures",
    handler: (req, reply) => {
      reply.sendFile("images/f02efa4ad2603305ed896df81f4986e6");
    }
  }
];

module.exports = pictureRoutes;
