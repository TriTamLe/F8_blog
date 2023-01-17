const express = require('express');
const router = express.Router();
const userController = require('../app/controllers/UserController');

router.get('/:userParam', userController.showProfile);
router.get('/', userController.index);

module.exports = router;
