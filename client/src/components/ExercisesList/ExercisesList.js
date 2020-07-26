import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Table from 'react-bootstrap/Table';  
import Col from 'react-bootstrap/Col';

import "./ExercisesList.css";

const Exercise = props => (
    <tr>
        <td>{props.exercise.username}</td>
        <td>{props.exercise.description}</td>
        <td>{props.exercise.duration}</td>
        <td>{props.exercise.date.substring(0, 10)}</td>
        <td>
            <Link to={`/edit/${props.exercise._id}`}>edit</Link> | <a href="/#" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</a>
        </td>
    </tr>
)

export default class ExercisesList extends Component {

    state = {
        exercises: []
    };

    componentDidMount() {
        axios.get('/exercises/')
            .then(res => {
                this.setState({
                    exercises: res.data
                });
            })
            .catch(err => {
                console.log(err);
            })
    }

    deleteExercise = id => {
        axios.delete(`/exercises/${id}`)
            .then(res => console.log(res.data));

        this.setState({
            exercises: this.state.exercises.filter(entry => entry._id !== id)
        })
    }

    exerciseList = () => {
        return this.state.exercises.map(currentexercise => {
            return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id} />
        })
    }

    render() {

        if (this.state.exercises.length > 0) {
            return (
                <Col xs={12} md={7} className="text-center mx-auto h-100 mt-5" id="exercises-list">
                    
                    <h3>Logged Exercises</h3>
                    <div>
                        <Table striped>
                            <thead>
                                <tr>
                                    <th>Username</th>
                                    <th>Description</th>
                                    <th>Duration</th>
                                    <th>Date</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.exerciseList()}
                            </tbody>
                        </Table>
                    </div>
               
                </Col>
            )
        } else {
            return (
                <p>Loading exercises...</p>
            )
        }

    }
}