// // src/views/profile.js
// import React, { useEffect, useState } from "react";
// import { useAuth0 } from "@auth0/auth0-react";
// import { useSelector, useDispatch, useStore } from "react-redux";
// import { checkifUserExist, fullUserInfoFromDb } from '../../../appStore/_actions/userAction'
// import RegCompletion from "./RegCompletion";
// import Profile from "./Profile";
// import Notice from "../../resuableComponents/Notice";
// import { Row, Col, Button, Link } from 'reactstrap'
// import BookingPage from "./BookingPage";
// import PaymentPage from "./PaymentPage";
// import * as ACTION_TYPES from '../../../appStore/_actions/types'
// //=========================
// //  User Dashboard
// //=========================
// export default function UserDashBoard() {
//     // const { user } = useAuth0();

//     const fullUserInfo = useSelector(state => state.user);
//     const error = useSelector(state => state.error);
//     const userExist = useSelector(state => state.userExist);
//     const ViewPage = useStore().getState();
//     const dispatch = useDispatch();

//     useEffect(() => {
//         /*              TASKS
//             ============================
//             CHECK IF USER ALREADY EXIST IN DB
//             IF USER DOES NOT EXIST IN DB  : DISPLAY REGISTRATION COMPLETION PAGE
//             /ELSE : DISPLAY PROFILE
//             if (user)
//             dispatch(checkifUserExist(user))        */
//         if (user) {

//             dispatch(checkifUserExist(user))
//                 .then(response => {
//                     if (response.payload.userExist) {
//                         const fullUser = response.payload.user
//                         dispatch(fullUserInfoFromDb(fullUser))
//                     }
//                 })
//         }
//     }, [dispatch, user])

//     
//     return (

//         <div className='mt-5 container'>
//             <div style={{ height: '100px' }}></div>

//             <div className='d-flex'>

//                 <div className='w-25'>
//                     <h3>Menu </h3>
//                     <Button color='primary ' onClick={ViewPageHandler('payment')}>
//                         booking
//                     </Button>
//                     <Button color='primary ' onClick={ViewPageHandler('payment')}>
//                         payment
//                     </Button>
//                 </div>
//                 <div>
//                     <h3> View </h3>
//                     {ViewPage === 'profile' &&
//                         // user & userExist
//                         <Profile user={fullUserInfo} />
//                         // <RegCompletion user={user} />
//                     }
//                     {ViewPage === 'booking' &&
//                         < BookingPage />
//                     }
//                     {
//                         ViewPage === 'payment' &&
//                         <PaymentPage />
//                     }
//                 </div>
//             </div>
//         </div>
//     )
// }
// git clone https://github.com/facebook/watchman.git -b v4.9.0 --depth 1
// cd watchman
//     ./ autogen.sh
//         ./ configure
// make
// sudo make install





<>

</>



