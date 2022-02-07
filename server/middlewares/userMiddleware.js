const { User, Book } = require("../models");

module.exports = async (req, _, next) => {
  if (!req.session?.user) return next();
  const { id } = req.session?.user;
  let user = null;
  if (id) {
    user = await User.findOne({
      attributes: ["id", "username"],
      where: {
        id,
      },
      include: {
        model: Book,
        attributes: ["title"],
      },
    });

    if (user) {
      username = user.username;
    }
  }
  req.Inertia.shareProps({ user });
  next();
};
