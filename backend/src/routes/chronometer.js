var express = require('express');
const timerController = require('../controllers/timer.controller');
var router = express.Router();

/* GET */
router.get('/', timerController.listAllTimer );

/* POST */
router.post('/', timerController.setTimer);

module.exports = router;
