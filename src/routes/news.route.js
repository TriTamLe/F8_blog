const express = require('express');
const router = express.Router();
const newsController = require('../app/controllers/NewsController');

router.get('/:slug', newsController.slugShow);
router.get('/', newsController.index);

module.exports = router;
