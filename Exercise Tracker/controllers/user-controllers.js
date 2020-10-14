const User = require('../models/user');

const createUsers = async (req, res, next) => {
  const createdUser = new User({
    user: req.body.user
  });

  try {
    await createdUser.save();
    console.log('Work!')
  } catch(err) {
    return next(err, 'error!');
  }

  res.json({"username": createdUser.user, "short_url": createdUser._id});
};


exports.createUsers = createUsers;