// src/views/profile.js
import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector, useDispatch } from "react-redux";
import { checkifUserExist, getUserFullInfo } from '../../../appStore/_actions/userAction'
import RegCompletion from "./RegCompletion";
import Profile from "./Profile";
import Notice from "../../resuableComponents/Notice";

//=========================
//  User Dashboard
//=========================
export default function UserDashBoard() {
    const { user } = useAuth0();

    const fullUserInfo = useSelector(state => state.user);
    const error = useSelector(state => state.error);
    const userExist = useSelector(state => state.userExist);
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
                        dispatch(getUserFullInfo(user))
                    }
                })
        }
    }, [dispatch, user])

    return (


        <div className='mt-5'>
            <div style={{ height: '20px' }}></div>
            {error ?
                < div >
                    <Notice />
                </div> :
                <>
                    {user & userExist ? <Profile user={fullUserInfo} /> :
                        <RegCompletion user={user} />
                    }
                </>
            }
            <div style={{ height: '20px' }}></div>

        </div >
    );
};

