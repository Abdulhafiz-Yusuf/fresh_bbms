import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, Button } from 'reactstrap';
import LoginButton from '../resuableComponents/Auth0LoginButton';
import LogoutButton from '../resuableComponents/Auth0LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';

const NavBar = (props) => {

    const { isAuthenticated } = useAuth0()

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className='bg-danger container fixed-top rounded mb-5 '>

            <Navbar color="danger" light expand="md">
                <NavbarBrand to="/">reactstrap</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <ul className="nav">
                            <li className="nav-item">
                                <Button color='danger'>
                                    <Link className="nav-link active text-light" to="/">Home</Link>
                                </Button>
                            </li>
                            <li className="nav-item">
                                <Button color='danger'>
                                    <Link className="nav-link active text-light" to="/:userId/form">Become a Donor</Link>
                                </Button>
                            </li>
                            <li className="nav-item">
                                <Button color='danger '>
                                    <Link className="nav-link active text-light" to="/med-center">Medical Center</Link>
                                </Button>
                            </li>

                        </ul>
                    </Nav>
                    {!isAuthenticated ? <LoginButton /> :
                        <LogoutButton />
                    }

                </Collapse>

            </Navbar>
        </div >
    );
}

export default NavBar;