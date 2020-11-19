import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,

    Button,

    NavbarText
} from 'reactstrap';

const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className='bg-danger container fixed-top mb-5'>

            <Navbar color="danger" light expand="md">
                <NavbarBrand to="/">reactstrap</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <ul class="nav">
                            <li class="nav-item">
                                <Link class="nav-link active text-light" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active text-light" to="/:userId/form">Become a Donor</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active text-light" to="#">Link</Link>
                            </li>

                        </ul>
                    </Nav>

                    <div className='d-flex justify-content-between' style={{ width: '200px' }}>
                        <Button color="danger " style={{ width: '190px' }}>Login/Register</Button>

                    </div>
                </Collapse>

            </Navbar>
        </div>
    );
}

export default NavBar;