const express = require('express');
const {registerUser, authUser, resetUser} = require("../controller/user2.controller")
const router = express.Router();

router.route('/').post(registerUser)
router.route('/login').post(authUser);
router.route('/reset').post(resetUser);

module.exports = router;