const express = require('express');

const userControllers = require('../controllers/user-controllers');

const router = express.Router();

router.post('/new-user', userControllers.createUsers);
// console.log("createUser123", userControllers.createUser)

// router.get("/:urlId", mongoose.getUrl);

module.exports = router;