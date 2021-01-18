// src/views/profile.js
import React, { useEffect, useState } from "react";
// import { useAuth0 } from "@auth0/auth0-react";
import { useSelector, useDispatch } from "react-redux";
import { checkifUserExist } from '../../appStore/_actions/userAction'
import RegCompletion from "./RegCompletion";
import Profile from "./Profile";
import BookingPage from "./BookingPage";
import PaymentPage from "./PaymentPage";
import DashBoardMenu from "./DashBoardMenu";
import { readBooking } from "../../appStore/_actions/BloodBankAction";


/*
=========================
  USERDASHBOARD PAGE
=========================
              Tasks
             ========
             1. After successful logIn/SignUp from Auth0 or Firebase this page is called
             2. Use User Identity Info from Auth0 or Firebase to check if user already already exist in DB.
                if User Exist in DB:
                {
                    Fetch Full User info from DB and Display User Profile Page.
                    HINTS:
                    1.  use dispatch(checkifUserExist(user)) to check if user Exist in DB
                        &&  if(Exist):
                            Fectch full User info from DB
                    2.  Else use 'UserExist' value in redux to display Registration Completion page
                }
                else:
                    Display Registration Completion Page to collect full user profile.
                      */
export default function UserDashBoard() {

    const stateViewPage = useSelector(state => state.UserReducer.ViewPage);
    const stateUser = useSelector(state => state.UserReducer.user);
    const stateUserExist = useSelector(state => state.UserReducer.UserExist);

    const [user, setUser] = useState({ users_Id: 1, email: 'talk2abdulhafiz@gmail.com', })

    const dispatch = useDispatch();

    useEffect(() => {
        if (user) {
            dispatch(checkifUserExist(user))
                .then(response => {
                    if (response.payload.userExist) {
                        dispatch(readBooking(user))
                            .then(booking => console.log(response.payload))
                    }

                })
        }
    }, [dispatch, user])


    const display = () => {
        console.log(stateUser)
        if (!stateUserExist & stateUser) {
            return (< RegCompletion user={stateUser[0]} />)
        }
        else if (!stateUser) {
            return (<>
                <h2 className='text-danger text-center mb-3 font-weight-bold'>
                    Loading User Data....</h2>
                <h3 className='text-danger text-center mb-3 font-weight-bold'>
                    If this take too long please refresh the page</h3>
            </>
            )
        }
        else if (stateUser && stateUser.length > 0) {
            return (
                <div>
                    <h2 className='text-danger text-center mb-3 font-weight-bold'> <span className='text-uppercase' >
                        {stateUser[0].username}</span> Welcome to 9jaBloodBank
                            </h2>

                    <div className='d-flex border border-danger'>
                        <DashBoardMenu user={stateUser[0]} />
                        <div className='d-flex justify-content-center border border-danger flex-grow-1'>

                            {stateViewPage === 'booking' ?
                                // user & userExist
                                <BookingPage user_id={stateUser[0].users_id} />
                                :
                                stateViewPage === 'payment'
                                    ?
                                    <PaymentPage user={stateUser[0]} />
                                    :
                                    <Profile user={stateUser[0]} bg={stateUser[0]} />
                            }
                        </div >
                    </div>
                </div>)
        }
    }




    return (
        <div className='mt-5 container'>
            <div style={{ height: '100px' }}></div>
            {
                display()
            }

        </div>
    )
}

