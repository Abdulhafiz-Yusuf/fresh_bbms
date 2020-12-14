import

//this endpoint will get the credentials from cloudinary_controller which will be signed. 
// app.get('/api/upload', cloudinaryController.upload);

//Read the user's session.
app.get('/api/user-data', userController.readUserData);

//Add a item to booking.
app.post('/api/user-data/booking', userController.addTobooking);

//Remove a item from the booking.
// Use request parameter to remove item from booking since you are looking a specific item in booking.
app.delete('/api/user-data/booking/:id', userController.removeFrombooking);
