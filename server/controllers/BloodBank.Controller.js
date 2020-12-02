const BloodBank = require('../models/BloodBank.Model');

module.exports = {
    readAllBloodBanks(req, res) {
        //When using mongoose can use a callback or a use a exec method to catch and respond to errors.
        BloodBank.find({}).exec((err, BloodBanks) => {
            if (err) console.log('Get BloodBank Mongoose Error------------------', err);
            // console.log('BloodBanks-------------', BloodBanks);
            res.status(200).send(BloodBanks);
        });
    },
    readBloodBank(req, res) {
        //Destruct the id from the endpoint url, to retrieve  a specific BloodBank.
        const { id } = req.params;
        //Copy and paste on of the BloodBank's id to the url when testing it.
        //Use the findById to get a specific BloodBank.
        BloodBank.findById(id).exec((err, BloodBank) => {
            if (err) console.log('Get Single BloodBank Error---------------', err);
            console.log('BloodBank--------------', BloodBank);
            res.status(200).json({ BloodBank });
        })
    }
}