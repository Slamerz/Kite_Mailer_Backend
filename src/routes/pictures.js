
const multer = require('fastify-multer');
const upload = multer({ dest: 'uploads/' });


const pictureRoutes = [
    {
        method: "POST",
        url: "/api/pictures",
        preHandler: upload.any(),
        handler: async (req, reply) => {
            try {
                reply.code(200).send("SUCCESS");
            } catch (err) {
                throw console.error(err);
            }
        }
    }
];

module.exports = pictureRoutes;