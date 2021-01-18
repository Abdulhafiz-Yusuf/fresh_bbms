
const express = require('express');
const router = express.Router()

//==========================
//  USER ROUTES
//==========================

const UserController = require('../controllers/User.Controller');

router.post('/checkIfUserExistInDB', UserController.checkIfUserExistIndb)
router.post('/regCompletion', UserController.regCompletion)
// router.get('/getuserFullInfo', UserController.getuserFullInfo)
module.exports = router