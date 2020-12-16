/*
  USER PROFILE SECTION
*/

const UserController = require('../controllers/User.Controller');


router.post('/userprofiletodb', UserController.userprofiletodb)

router.get('/userprofilefromdb',)

// Retrieve another users profile from db based on username 
router.get('/otheruserprofilefromdb', UserController.otheruserprofilefromdb);

//Get another user's posts based on username
router.get('/otheruserposts', UserController.otheruserposts);

module.exports = router