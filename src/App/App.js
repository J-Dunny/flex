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

  randomWorkout = () => {
    let exercise = this.state.newExercises
    
    const randomWorkout = {
      exercises: [exercise[Math.floor(Math.random() * 1327)], exercise[Math.floor(Math.random() * 1327)], exercise[Math.floor(Math.random() * 1327)], exercise[Math.floor(Math.random() * 1327)], exercise[Math.floor(Math.random() * 1327)]],
      id: Date.now(),
      title: "Random Workout"

    }
    this.setState({ workouts: [...this.state.workouts, randomWorkout] })
  }

  deleteWorkout = (workoutId) => {
    const workouts = this.state.workouts.filter(workout => workout.id != workoutId)
    this.setState({ workouts: workouts })
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
                <AllWorkouts randomWorkout={this.randomWorkout} workouts={this.state.workouts} deleteWorkout={this.deleteWorkout} />
              </React.Fragment>
            )
          }
          } />
          <Route exact path="/addworkout" render={() => {
            return (
              <React.Fragment>
                <Header />
                <WorkoutForm
                  exercises={this.state.exercises}
                  pictures={this.state.pictures}
                  newExercises={this.state.newExercises}
                  addWorkout={this.addWorkout}
                />
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
