const Exercise = require('../models/exercise');
const User = require('../models/user');

const createExercise = async (req, res, next) => {
  const {userId, description, duration} = req.body;

  const date = new Date();

  let existingUser;
  try {
    existingUser = await User.findById(userId);
  } catch (err) {
    return next(err);
  }

  if (!existingUser) {
    return next('user do not exist');
  }

  const username = existingUser.user;

  const createdExercise = new Exercise({
    userId: userId,
    username,
    duration,
    description
  });

  try {
    await createdExercise.save();
  } catch(err) {
    return next(err);
  }

  res.json({_id: userId, username, date, duration, description,});
};

exports.createExercise = createExercise;