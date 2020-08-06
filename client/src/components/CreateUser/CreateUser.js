import React, { Component } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';

import "./CreateUser.css";


export default class CreateUser extends Component {
    state = {
        username: "",
    }

    onChangeUsername = e => {
        this.setState({
            username: e.target.value
        });
    }

    onSubmit = e => {
        e.preventDefault();

        const user = {
            username: this.state.username
        };

        axios.post('/users/add', user)
            .then(res => console.log(res.data));

        this.setState({
            username: ""
        })
    }

    render() {
        return (
            <Col sm={5} className="mt-5 h-100 mx-auto">
                <Jumbotron className="shadow-lg border border-dark">
                <h3 className="text-center">Create New User</h3>
                <Form onSubmit={this.onSubmit}>
                    <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text"
                            required
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                        />
                    </Form.Group>
                    <Button variant="dark" type="submit" className="mt-4">
                        Add User
                    </Button>
                </Form>
                </Jumbotron>
                </Col>
        )
    }
}