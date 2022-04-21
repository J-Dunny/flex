import React, { Component } from 'react'
import { fetchExercises, fetchCategories, fetchPictures, newExercises } from '../apiCalls';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../Header/Header';
import WorkoutForm from '../WorkoutFrom/WorkoutForm';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      exercises: [],
      categories: [],
      pictures: [],
      workouts: [],
      newExercises: []
    }
  }

  componentDidMount() {
    newExercises()
      .then(data => this.setState({ newExercises: data}))
    // .then(data => console.log(data))
      
    fetchExercises()
      .then(data => this.setState({ exercises: data.results }))
    fetchCategories()
      .then(data => this.setState({ categories: data.results }))
    fetchPictures()
      .then(data => this.setState({ pictures: data.results }))
      
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
                <WorkoutForm exercises={this.state.exercises} pictures={this.state.pictures} newExercises={this.state.newExercises}/>
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
