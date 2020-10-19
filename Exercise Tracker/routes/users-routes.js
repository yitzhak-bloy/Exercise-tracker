const express = require('express');

const userControllers = require('../controllers/user-controllers');

const router = express.Router();

router.post('/new-user', userControllers.createUsers);

// router.get("/:urlId", mongoose.getUrl);

module.exports = router;