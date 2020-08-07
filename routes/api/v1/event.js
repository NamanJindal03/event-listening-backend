const express = require('express');
const router = express.Router();

const {isSignedIn} = require('../../../controllers/api/v1/user_auth_controller');
const { getUserById} = require('../../../controllers/api/v1/user_controller');
const {createEvent, allEvents} = require('../../../controllers/api/v1/event_controller')

//router.param("userId", getUserById);
router.post("/create-event", isSignedIn, createEvent)
router.get("/all-events", isSignedIn, allEvents )

module.exports = router;