const mongoose = require('mongoose');
const User = require('../models/user');


const createUsers = async (req, res, next) => {
  console.log("createUser -> 111111")

  const createUser = new User({
    user: req.body.user
  });
  console.log("createUser -> createUser2222213123333", createUser)

  // try {
  //   await createUser.save();
  //   console.log(';vmkjv')
  // } catch(err) {
  //   return next(err, 'error!!!!1111');
  // }

  res.json({"username": createUser.user, "short_url": createUser._id});
};


exports.createUsers = createUsers;