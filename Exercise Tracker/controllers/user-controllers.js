const User = require('../models/user');

const createUsers = async (req, res, next) => {
  const createdUser = new User({
    username: req.body.username
  });

  try {
    await createdUser.save();
    console.log('Work!')
  } catch(err) {
    return next(err, 'error!');
  }
  console.log(createdUser)

  res.json({"username": createdUser.username, "_id": createdUser._id});
};


const getUsers = async (req, res, next) => {

  let users
  try {
    users = await User.find();
  }  catch (err) { 
    return next(err);
  }
  

  res.json(users)
};


exports.createUsers = createUsers;
exports.getUsers = getUsers;