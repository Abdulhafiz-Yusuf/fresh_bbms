import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { BsFillPersonFill } from 'react-icons/bs';
import { Button } from 'reactstrap';

const LoginButton = () => {

    const { loginWithRedirect } = useAuth0();

    return (
        <>
            <Button className="border border-light" onClick={() => loginWithRedirect()} color="danger "
                style={{ width: '130px' }}>
                <BsFillPersonFill />
                <p>Login/Register</p>
            </Button>
        </>
    )
}

export default LoginButton
