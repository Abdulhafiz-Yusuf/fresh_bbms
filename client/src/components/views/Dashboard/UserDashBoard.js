// src/views/profile.js
import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector, useDispatch, useStore } from "react-redux";
import { checkifUserExist, fullUserInfoFromDb, viewPageAction } from '../../../appStore/_actions/userAction'
import RegCompletion from "./RegCompletion";
import Profile from "./Profile";
import Notice from "../../resuableComponents/Notice";
import BookingPage from "./BookingPage";
import PaymentPage from "./PaymentPage";
import { testUserData, testBookingData } from './data'
import DashBoardMenu from "./DashBoardMenu";


//=========================
//  User Dashboard
//=========================
export default function UserDashBoard() {
    const { user } = useAuth0();


    const stateError = useSelector(state => state.UserReducer.Error);
    const stateViewPage = useSelector(state => state.UserReducer.ViewPage);
    const stateUser = useSelector(state => state.UserReducer.User);
    const stateUserExist = useSelector(state => state.UserReducer.UserExist);
    const dispatch = useDispatch();

    useEffect(() => {
        /*              TASKS
             ============================
             CHECK IF USER ALREADY EXIST IN DB
             IF USER DOES NOT EXIST IN DB  : DISPLAY REGISTRATION COMPLETION PAGE
             /ELSE : DISPLAY PROFILE
                 if (user)
               dispatch(checkifUserExist(user))        */
        if (user) {
            dispatch(checkifUserExist(user))
                .then(response => {
                    if (response.payload.userExist) {
                        const fullUser = response.payload.user
                        dispatch(fullUserInfoFromDb(fullUser))
                    }
                })
        }
    }, [dispatch, user])


    return (
        <div className='mt-5 container'>
            <div style={{ height: '100px' }}></div>
            <div>
                {stateError && <Notice />}
            </div>
            <h2 className='text-danger text-center mb-3 font-weight-bold'> <span className='text-uppercase' >{testUserData.username}</span> Welcome to 9jaBloodBank </h2>
            <div className='d-flex border border-danger'>

                <DashBoardMenu user={testUserData} />
                <div className='d-flex justify-content-center border border-danger flex-grow-1'>

                    {stateViewPage === 'booking' ?
                        // user & userExist
                        <BookingPage booking={testBookingData} />
                        :
                        stateViewPage === 'payment'
                            ?
                            <PaymentPage user={stateUser} />
                            :
                            <Profile user={testUserData} />
                        // <RegCompletion user={user} />
                    }

                </div>
            </div>
        </div >
    )
}



