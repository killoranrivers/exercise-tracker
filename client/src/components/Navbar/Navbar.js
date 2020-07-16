import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';

import "./Navbar.css";


export default class MyNavbar extends Component {
  render() {
    return (

    <Col xs={2} style={{paddingLeft: "0px"}}>
      <Navbar bg="dark" variant="dark" className="flex-column h-100">
        <Navbar.Brand as={Link} to="/" id="navbar-brand">ExcerTracker</Navbar.Brand>
          <Nav className="justify-content-center flex-column">
            <Nav.Link as={Link} to="/" className="nav-link">Exercises</Nav.Link>
            <Nav.Link as={Link} to="/create" className="nav-link">Create Exercise Log</Nav.Link>
            <Nav.Link as={Link} to="/user" className="nav-link">Create User</Nav.Link>
          </Nav>
        
      </Navbar>
      </Col>
    );
  }
}