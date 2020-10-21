const Exercise = require('../models/exercise');
const User = require('../models/user');

const createExercise = async (req, res, next) => {
  const {_id, duration, description} = req.body;

  const date = new Date();

  let existingUser;
  try {
    existingUser = await User.findById(_id);
  } catch (err) {
    return next(err);
  }

  if (!existingUser) {
    return next('user do not exist');
  }

  const username = existingUser.user;

  const createdExercise = new Exercise({
    _id,
    username,
    date,
    duration,
    description
  });

  try {
    await createdExercise.save();
  } catch(err) {
    return next(err);
  }

  res.json({_id, username, date, duration, description,});
};

exports.createExercise = createExercise;
