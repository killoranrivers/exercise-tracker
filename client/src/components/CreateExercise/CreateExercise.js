import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';

import "./CreateExercise.css";

export default class CreateExercise extends Component {
    state = {
        username: "",
        description: "",
        duration: 0,
        date: new Date(),
        users: []
    }

    componentDidMount() {
        axios.get('/users')
            .then(res => {
                if (res.data.length > 0) {
                    this.setState({
                        users: res.data.map(user => user.username)
                        // username: res.data[0].username
                    })
                }
            })
    }

    onChangeUsername = e => {
        this.setState({
            username: e.target.value
        });
    }

    onChangeDescription = e => {
        this.setState({
            description: e.target.value
        });
    }

    onChangeDuration = e => {
        this.setState({
            duration: e.target.value
        });
    }

    onChangeDate = date => {
        this.setState({
            date: date
        });
    }

    onSubmit = e => {
        e.preventDefault();

        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        };

        axios.post('/exercises/add', exercise)
            .then(res => console.log(res.data));

        window.location = '/';
    }

    render() {
        return (
            <Col sm={6} className="mt-5 mx-auto h-100">
                <Jumbotron className="py-4 shadow-lg border border-dark">
                <h3 className="text-center">Create New Exercise Log</h3>
                <Form onSubmit={this.onSubmit}>
                    <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control as="select"
                            required
                            defaultValue={-1}
                            onChange={this.onChangeUsername}>
                            <option
                                disabled
                                key={-1}
                                value={-1}>
                                Select User
                                    </option>

                            {
                                this.state.users.map(user => {
                                    return <option
                                        key={user}
                                        value={user}>{user}
                                    </option>;
                                })
                            }
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text"
                            required
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Duration (in minutes)</Form.Label>
                        <Form.Control type="text"
                            value={this.state.duration}
                            onChange={this.onChangeDuration}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Date</Form.Label>
                        <div>
                            <DatePicker
                                selected={this.state.date}
                                onChange={this.onChangeDate}
                                id="date"
                            />
                        </div>
                    </Form.Group>

                    <Button variant="dark" type="submit" className="mt-4 mb-3">
                        Create Excercise Log
                    </Button>
                </Form>
                </Jumbotron>
            </Col>

        )
    }
}