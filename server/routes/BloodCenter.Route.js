const BloodcenterController = require('../controllers/BloodCenter.Controller');
const express = require('express')
const router = express.Router()

//Bloodcenter Endpoints
//Getting all the Bloodcenter 
router.get('/', BloodcenterController.readAllBloodGroup);
router.get('/blood_by_id', BloodcenterController.readBloodGroupByID);

module.exports = router
