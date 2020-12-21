
const express = require('express');
const router = express.Router()
// /*
//   USER PROFILE SECTION
// */

const UserController = require('../controllers/User.Controller');

router.get('/checkIfUserExistIndb', UserController.checkIfUserExistIndb)
router.post('/regCompletion', UserController.regCompletion)
// router.get('/getuserFullInfo', UserController.getuserFullInfo)
module.exports = router