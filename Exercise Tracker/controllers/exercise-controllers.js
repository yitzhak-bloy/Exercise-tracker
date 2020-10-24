const Exercise = require('../models/exercise');
const User = require('../models/user');

const createExercise = async (req, res, next) => {
  let {userId, description, duration, date} = req.body;

  if (!date) {
    date = new Date();
  }

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
    description,
    date
  });

  try {
    await createdExercise.save();
  } catch(err) {
    return next(err);
  }

  res.json({_id: userId, username, date: createdExercise.date , duration, description,});
};

const getExercise = async (req, res, next) => {
  const userId = req.params.userId;
  console.log("getExercise -> userId", userId)

  let exercise
  try {
    exercise = await Exercise.find({ userId: userId });
    console.log("getExercise -> users", exercise)
  }  catch (err) { 
    return next(err);
  }

  res.json(exercise)
};

exports.createExercise = createExercise;
exports.getExercise = getExercise;