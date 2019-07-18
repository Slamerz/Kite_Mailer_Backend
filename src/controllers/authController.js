const boom = require("boom");
const User = require("../models/User");

exports.authUser = async (req, reply) => {
  const failure = "Incorrect Email or Password";
  const token = await reply.jwtSign(req.body.password);
  try {
    const users = await User.find({ email: req.body.email });
    if (!users) {
      reply.code(406);
      reply.send(failure);
    }
    users.find(user => {
      if (user.token === token) {
        reply.code(202);
        reply.send(user);
      }
    });
    reply.code(406);
    reply.send(failure);
  } catch (err) {
    throw boom.boomify(err);
  }
};
