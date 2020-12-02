const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Define your User Collection Objects Structure
//With datatypes
//We'll be using Auth0 for authentication in the future.
const User = new Schema({
    //THis is where the User will login 
    //For Now we will be inserting test data
    name: String,
    email: String,
    Username: String,
    auth0_id: String,
    //New Property added to model.
    profile_picture: String,
    //Admin Property added to model.
    is_admin: Boolean
});

//Export the model on the mongoose.
//So this model will be inserted to the database.
module.exports = mongoose.model('User', User);