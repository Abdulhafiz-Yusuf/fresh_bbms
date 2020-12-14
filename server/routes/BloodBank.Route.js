const BloodBankController = require('../controllers/BloodBank.Controller');

//BloodBank Endpoints
//Getting all the BloodBank 
app.get('/api/BloodBank', BloodBankController.readAllBloodBank);

//Getting a specified product
//Use a request parameter, since retrieving a specified product..
app.get('/api/BloodBank/:id', BloodBankController.readProduct);

// //Admin Endpoints 
// //Gets the admin users.
// app.get('/api/users', adminController.getAdminUsers);

// //When a admin creates a product. No need for request parameter in this case. Since we are inserting data to database.
// app.post('/api/BloodBank', adminController.createProduct);

// //When a admin update a current product. Need request parameter since updating a specific product based on  the id.
// app.put('/api/BloodBank/:id', adminController.updateProduct);

// //When a admin deletes a product, need an id to specify a product to delete.
// app.delete('/api/BloodBank/:id', adminController.deleteProduct);
