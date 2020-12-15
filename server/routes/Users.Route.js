/*
  USER PROFILE SECTION
*/

const UserController = require('../controllers/Bloodcenter.Controller');


router.post('/api/posts/userprofiletodb', UserController.userprofiletodb)

router.get('/api/get/userprofilefromdb',)


router.get('/api/get/userposts', UserController.userposts)

// Retrieve another users profile from db based on username 
router.get('/api/get/otheruserprofilefromdb', UserController.otheruserprofilefromdb);

//Get another user's posts based on username
router.get('/api/get/otheruserposts', UserController.otheruserposts);

module.exports = router