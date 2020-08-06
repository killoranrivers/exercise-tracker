import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';

import "./Navbar.css";


export default class MyNavbar extends Component {

  render() {
    return (

      <Col xs={12} md={4} xl={2} className="px-0" id="navbar-col">
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" className="flex-sm-column h-100" id="navbar">
          <Navbar.Brand as={Link} to="/" id="navbar-brand">ExcerTracker</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="flex-sm-column" id="responsive-navbar-nav">
            <Nav className="flex-sm-column" activeKey="/">
              <Nav.Link as={Link} to="/" eventKey="link-1">Exercises</Nav.Link>
              <Nav.Link as={Link} to="/create" eventKey="link-2">Create Exercise Log</Nav.Link>
              <Nav.Link as={Link} to="/user" eventKey="link-3">Create User</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Col>
    );
  }
}