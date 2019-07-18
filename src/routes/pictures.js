const multer = require("fastify-multer");
const upload = multer({ dest: "src/routes/public/images" });

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
    url:"/api/pictures",
    handler: async (req, reply) =>{
      reply.sendFile("73aa1c8f33b75c78c0ff5bb0bcf15b36");
    }
  }
];

module.exports = pictureRoutes;
