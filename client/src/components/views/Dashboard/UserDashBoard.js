// src/views/profile.js

import React, { useEffect } from "react";
import axios from 'axios'
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
    const { user } = useAuth0();
    const { name, picture, email } = user;

    useEffect(() => {
        //=============================
        //      TASKS
        //============================
        //CHECK IF USER ALREADY EXIST IN DB
        //IF USER DOES NOT EXIST IN DB  : DISPLAY REGISTRATION COMPLETION PAGE
        ///ELSE : DISPLAY PROFILE


        if (user) {
            axios.post('http://localhost:9000/user/userprofiletodb', email)
                .then(


                )
                .catch(err => console.log("Unable to save user in db "))

        }



    }, [user, email])

    return (
        <div className='mt-5'>
            <div style={{ height: '20px' }}></div>
            <div className="row align-items-center profile-header">
                <div className="col-md-2 mb-3">
                    <img
                        src={picture}
                        alt="Profile"
                        className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
                    />
                </div>
                <div className="col-md text-center text-md-left">
                    <h2>{name}</h2>
                    <p className="lead text-muted">{email}</p>
                </div>
            </div>
            <div className="row">
                <pre className="col-12 text-light bg-dark p-4">
                    {JSON.stringify(user, null, 2)}
                </pre>
            </div>
        </div>
    );
};

export default Profile;