const { User } = require("../models");

module.exports = async (req, _, next) => {
  if (!req.session?.user) return next();
  const { userId } = req.session?.user;
  let username = null;
  if (userId) {
    const user = await User.findOne({
      where: {
        id: userId,
      },
    });

    if (user) {
      username = user.username;
    }
  }
  req.Inertia.shareProps({ username });
  next();
};
