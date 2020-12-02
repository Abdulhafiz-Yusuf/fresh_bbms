import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import { BsFillPersonFill } from 'react-icons/bs';
import { Button } from 'reactstrap';

const Auth0LogoutButton = () => {
    const { Logout } = useAuth0();

    return (
        <Button className="border border-light" onClick={() => Logout()} color="danger "
            style={{ width: '130px' }}>
            <BsFillPersonFill />
            <p>Logout</p>
        </Button>

    )
}

export default Auth0LogoutButton
