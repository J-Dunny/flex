import React, { Component } from 'react'
import { fetchExercises, fetchCategories } from '../apiCalls';
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
      <div className="App">
        <h1>Flex</h1>
        {this.state.exercises[0] ? this.state.exercises.map(exercise => <p key={exercise.id}>{exercise.name}</p>) : <p>Loading..</p>}
      </div>
    );
  }

}

export default App;
