import React, { Component } from 'react'
import { newExercises } from '../apiCalls';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../Header/Header';
import WorkoutForm from '../WorkoutFrom/WorkoutForm';
import AllWorkouts from '../AllWorkouts/AllWorkouts';
import DoWorkout from '../DoWorkout/DoWorkout';
import Error from '../Error/Error';
import './App.css';
import NoMatch from './NoMatch/NoMatch';

class App extends Component {
  constructor() {
    super()
    this.state = {
      newExercises: [],
      workouts: [],
      errorMsg: ''
    }
  }

  componentDidMount() {
    newExercises()
      .then(data => {
        console.log(data)
        this.setState({ newExercises: data })})
      .catch(error => this.setState({
        ...this.state,
        errorMsg: error.message,
      }))
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

  findWorkout(workoutId) {
    const workout = this.state.workouts.find(workout => workout.id === workoutId)
    return workout
  }

  render() {
    console.log(this.state)
    if (this.state.errorMsg) {
      return (
        <Route exact path="*" render={() => {
          return (
            <Error error={this.state.errorMsg} />
          )
        }
        } />
      )
    }


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
                  newExercises={this.state.newExercises}
                  addWorkout={this.addWorkout}
                />
              </React.Fragment>
            )
          }
          } />
          <Route exact path="/doworkout/:id" render={({ match }) => {
            return (
              <React.Fragment>
                <Header />
                <DoWorkout oneWorkout={this.findWorkout(parseInt(match.params.id))}

                />
              </React.Fragment>
            )
          }
          } />
          <Route path="*" render={() => {
            return (
              <React.Fragment>
                <Header />
                <NoMatch />
              </React.Fragment>
            )
          }
          } />




        </Switch>
      </main >
    );
  }

}

export default App;
