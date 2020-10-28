const Exercise = require('../models/exercise');
const User = require('../models/user');

const createExercise = async (req, res, next) => {
  let {userId, description, duration, date} = req.body;

  if (!date || date === undefined) {
    date = new Date();
  }

  dateStr = new Date(date).toDateString();

  let existingUser;
  try {
    existingUser = await User.findById(userId);
  } catch (err) {
    return next(err);
  }

  if (!existingUser) {
    return next('User do not exist');
  }

  const username = existingUser.username;
  duration = parseInt(duration);

  const createdExercise = new Exercise({
    userId,
    username,
    duration,
    description,
    date: dateStr
  });

  try {
    await createdExercise.save();
  } catch(err) {
    return next(err);
  }
  
  res.json({ 
    username, 
    description, 
    duration,
    _id: userId, 
    date: dateStr
  });
};

const getExercise = async (req, res, next) => {
  const {userId, from, to, limit} = req.query;

  let exercises
  try {
    exercises = await Exercise.find({ userId: userId });
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

  if (from && !to) {
    exercises = exercises.filter(item => new Date(item.date).getTime() > new Date(from).getTime());
  } else if (!from && to) {
    exercises = exercises.filter(item => new Date(item.date).getTime() < new Date(to).getTime());
  } else if (from && to) {
    exercises = exercises.filter(item => new Date(item.date).getTime() > new Date(from).getTime() && new Date(item.date).getTime() < new Date(to).getTime());
  }

  if(limit){
    exercises = exercises.slice(0, limit);
  }  

  res.json({
    _id: userId,  
    username: user.user, 
    count: exercises.length, 
    log: exercises.map(exercise => {
      return {
        description: exercise.description,
        duration: exercise.duration,
        date: exercise.date
        }
    })
  })
};

exports.createExercise = createExercise;
exports.getExercise = getExercise;