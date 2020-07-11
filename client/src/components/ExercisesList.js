import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'semantic-ui-react';
import axios from 'axios';

const Exercise = props => (
    // <tr>
    //     <td>{props.exercise.username}</td>
    //     <td>{props.exercise.description}</td>
    //     <td>{props.exercise.duration}</td>
    //     <td>{props.exercise.date.substring(0, 10)}</td>
    //     <td>
    //         <Link to={`/edit/${props.exercise._id}`}>edit</Link> | <a href="/#" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</a>
    //     </td>
    // </tr>

    <Table.Row>
        <Table.Cell>{props.exercise.username}</Table.Cell>
        <Table.Cell>{props.exercise.description}</Table.Cell>
        <Table.Cell>{props.exercise.duration}</Table.Cell>
        <Table.Cell>{props.exercise.date.substring(0, 10)}</Table.Cell>
        <Table.Cell><Link to={`/edit/${props.exercise._id}`}>edit</Link> | <a href="/#" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</a></Table.Cell>
    </Table.Row>
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

        return (
            <div className="container text-center">
                <h3>Logged Exercises</h3>
                <Table>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Username</Table.HeaderCell>
                            <Table.HeaderCell>Description</Table.HeaderCell>
                            <Table.HeaderCell>Duration</Table.HeaderCell>
                            <Table.HeaderCell>Date</Table.HeaderCell>
                            <Table.HeaderCell>Actions</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {this.exerciseList()}
                    </Table.Body>
                </Table>
            </div>
        )

        // if (this.state.exercises.length > 0) {
        //     return (
        //         <div className="container text-center">

        //             <h3>Logged Exercises</h3>
        //             <div>
        //                 <table className="table-responsive-sm">
        //                     <thead className="thead-light">
        //                         <tr>
        //                             <th>Username</th>
        //                             <th>Description</th>
        //                             <th>Duration</th>
        //                             <th>Date</th>
        //                             <th>Actions</th>
        //                         </tr>
        //                     </thead>
        //                     <tbody>
        //                         {this.exerciseList()}
        //                     </tbody>
        //                 </table>
        //             </div>
        //         </div>
        //     )
        // } else {
        //     return (
        //         <p>No data</p>
        //     )
        // }

    }
}