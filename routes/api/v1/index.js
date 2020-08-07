const express = require('express');
const router = express.Router();

router.use('/user', require('./user_auth'))
router.use('/user', require('./user'))
router.use('/event',require('./event'))
module.exports = router;