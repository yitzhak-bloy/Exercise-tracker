const express = require('express');

const userControllers = require('../controllers/user-controllers');
const exerciseControllers = require('../controllers/exercise-controllers');

const router = express.Router();

router.post('/new-user', userControllers.createUsers);

router.get("/users", userControllers.getUsers);

router.post('/add', exerciseControllers.createExercise);

router.get('/log/:userId', exerciseControllers.getExercise);


module.exports = router;