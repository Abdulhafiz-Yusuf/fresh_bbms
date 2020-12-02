import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, Button } from 'reactstrap';
import LoginButton from '../resuableComponents/Auth0LoginButton';



const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className='bg-danger container fixed-top mb-5 shadow'>

            <Navbar color="danger" light expand="md">
                <NavbarBrand to="/">reactstrap</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <ul class="nav">
                            <li class="nav-item">
                                <Button color='danger'>
                                    <Link class="nav-link active text-light" to="/">Home</Link>
                                </Button>
                            </li>
                            <li class="nav-item">
                                <Button color='danger'>
                                    <Link class="nav-link active text-light" to="/:userId/form">Become a Donor</Link>
                                </Button>
                            </li>
                            <li class="nav-item">
                                <Button color='danger '>
                                    <Link class="nav-link active text-light" to="#">Medical Center</Link>
                                </Button>
                            </li>

                        </ul>
                    </Nav>
                    <LoginButton />

                </Collapse>

            </Navbar>
        </div >
    );
}

export default NavBar;