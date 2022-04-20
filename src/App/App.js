import React, { Component } from 'react'
import { fetchExercises, fetchCategories, fetchPictures } from '../apiCalls';
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
      workouts: []
    }
  }

  componentDidMount() {
    fetchExercises()
      .then(data => this.setState({ exercises: data.results }))
    fetchCategories()
      .then(data => this.setState({ categories: data.results }))
    fetchPictures()
      .then(data => this.setState({ pictures: data.results }))
      
  }

  render() {
    console.log(this.state)
    return (
      <main className="App">
        <Switch>
          <Redirect exact from='/' to='/home' />
          <Route exact path="/home" render={() => {
            return (
              <React.Fragment>
                <Header />
                <WorkoutForm exercises={this.state.exercises} pictures={this.state.pictures} />
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
