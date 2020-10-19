const express = require('express');

const userControllers = require('../controllers/user-controllers');

const router = express.Router();

router.post('/new-user', userControllers.createUsers);

router.get("/users", userControllers.getUsers);

module.exports = router;