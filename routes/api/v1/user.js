const express = require('express');
const router = express.Router();
const {check} = require('express-validator');
const {isSignedIn, isAuthenticated} = require('../../../controllers/api/v1/user_auth_controller');
const {getUserEvents, getUserById} = require('../../../controllers/api/v1/user_controller');

router.param("userId", getUserById);
router.get("/:userId", isSignedIn, isAuthenticated, getUserEvents)

module.exports = router;