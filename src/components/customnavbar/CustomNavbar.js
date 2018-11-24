import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class CustomNavbar extends Component {
    render() {
        return (
            <Navbar default collapseOnSelect>
                <div style={{display:"flex", flexDirection:"row"}}>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/"></Link>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight style={{display:"flex", flexDirection:"row"}}>
                            <NavItem eventKey={1} componentClass={Link} href="/" to="/">Home</NavItem>
                            <NavItem eventKey={2} componentClass={Link} href="/learn" to="/learn">Learn More</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        );
    }
}
