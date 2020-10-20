const Exercise = require('../models/exercise');

const createExercise = async (req, res, next) => {
  const createdExercise = new User({
      _id: req.body._id,
      username: req.body.username,
      date: req.body.date,
      duration: req.body.duration,
      description: req.body.description
    });
  
    try {
      await createdExercise.save();
      console.log('Work!')
    } catch(err) {
      return next(err, 'error!');
    }
  
    res.json({_id, username, date, duration, description,});
};

exports.createExercise = createExercise;
