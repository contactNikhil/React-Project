import React from 'react'
import { Nav, Navbar, Form, Button, FormControl } from 'react-bootstrap';
import SideNavigationBar from './SideNavigationBar';
import './Navbar.css';
function NavBar() {
    return (
        <div>
            <Navbar bg="muted" variant="dark">
                <Navbar.Brand href="https://www.brilworks.com/" className="title__company">Brilworks</Navbar.Brand>
                <div className="m-auto title__text">Employee Management System</div>
                <Form inline>

                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />

                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>

        </div>
    )
}

export default NavBar;
