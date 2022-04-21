import React, { Component } from 'react'
import { newExercises } from '../apiCalls';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../Header/Header';
import WorkoutForm from '../WorkoutFrom/WorkoutForm';
import AllWorkouts from '../AllWorkouts/AllWorkouts';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      newExercises: [],
      workouts: []
    }
  }

  componentDidMount() {
    newExercises()
      .then(data => this.setState({ newExercises: data }))   
  }

  addWorkout = (newWorkout) => {
    this.setState({ workouts: [...this.state.workouts, newWorkout] })
}

  render() {
    
    return (
      <main className="App">
        <Switch>
          <Redirect exact from='/' to='/home' />
          <Route exact path="/home" render={() => {
            return (
              <React.Fragment>
                <Header />
                <AllWorkouts workouts={this.state.workouts} />
              </React.Fragment>
            )
          }
          } />
          <Route exact path="/addworkout" render={() => {
            return (
              <React.Fragment>
                <Header />
                <WorkoutForm exercises={this.state.exercises} pictures={this.state.pictures} newExercises={this.state.newExercises} addWorkout={this.addWorkout}/>
              </React.Fragment>
            )
          }
          } />
        </Switch>
      </main>
    );
  }

}

export default App;
