import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MyNavbar from "./components/Navbar/Navbar";
import ExercisesList from "./components/ExercisesList";
import EditExercise from "./components/EditExercise";
import CreateExercise from "./components/CreateExercise";
import CreateUser from "./components/CreateUser";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function App() {
  return (
    <Router>
      <Container fluid>
        <Row style={{height: "100vh"}}>
      <MyNavbar />
      <Switch>
        <Route path="/" exact component={ExercisesList} />
        <Route path="/edit/:id" exact component={EditExercise} />
        <Route path="/create" exact component={CreateExercise} />
        <Route path="/user" exact component={CreateUser} />
      </Switch>
      </Row>
      </Container>
    </Router>
  );
}

export default App;
