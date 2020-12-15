const BloodcenterController = require('../controllers/Bloodcenter.Controller');

//Bloodcenter Endpoints
//Getting all the Bloodcenter 
app.get('/api/Bloodcenter', BloodcenterController.readAllBloodcenter);

//Getting a specified center
//Use a request parameter, since retrieving a specified product..
app.get('/api/Bloodcenter/:id', BloodcenterController.readProduct);

