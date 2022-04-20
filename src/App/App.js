import React, { Component } from 'react'
import { fetchExercises, fetchCategories } from '../apiCalls';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../Header/Header';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      exercises: [],
      categories: []
    }
  }

  componentDidMount() {
    fetchExercises()
      .then(data => this.setState({ exercises: data.results }))
    fetchCategories()
      .then(data => this.setState({ categories: data.results }))
  }

  render() {
    return (
      <main className="App">
        <Switch>
          <Redirect exact from='/' to='/home' />
          <Route exact path="/home" render={() => <Header />} />
        </Switch>
      </main>
    );
  }

}

export default App;
