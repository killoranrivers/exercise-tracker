import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


export default class MyNavbar extends Component {
  render() {
    return (

      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand as={Link} to="/">ExcerTracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Exercises</Nav.Link>
            <Nav.Link as={Link} to="/create">Create Exercise Log</Nav.Link>
            <Nav.Link as={Link} to="/user">Create User</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}