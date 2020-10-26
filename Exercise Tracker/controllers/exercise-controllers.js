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
    return next('User do not exist');
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
  const userId = req.query.userId;
  console.log("getExercise -> req.query", req.query)

  let exercise
  try {
    exercise = await Exercise.find({ userId: userId });
  }  catch (err) { 
    return next(err);
  }

  let user;
  try {
    user = await User.findById(userId);
  } catch (err) {
    return next(err);
  }

  if (!user) {
    return next('User does not exist');
  }

  res.json({
    _id: userId,  
    username: user.user, 
    count: exercise.length, 
    log: exercise
  })
};

exports.createExercise = createExercise;
exports.getExercise = getExercise;