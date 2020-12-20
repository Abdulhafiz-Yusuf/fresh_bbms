const express = require('express');
const router = express.Router()
/*
  USER PROFILE SECTION
*/

const UserController = require('../controllers/User.Controller');

router.get('/checkIfUserExistInDB', UserController.checkIfUserExistinDB)
router.get('/getuserFullInfo', UserController.getuserFullInfo)
router.get('/regCompletion', UserController.regCompletion)

// Retrieve another users profile from db based on username 
router.get('/otheruserprofilefromdb', UserController.otheruserprofilefromdb);

//Get another user's posts based on username
router.get('/otheruserposts', UserController.otheruserposts);

module.exports = router