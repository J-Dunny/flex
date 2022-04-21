import React, { Component } from 'react'
import ExerciseForm from '../ExerciseForm/ExerciseForm'
import Exercise from '../Exercise/Exercise'

class WorkoutForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            exercises: []
        }
    }

    addExercise = (newExercise) => {
        this.setState({exercises: [...this.state.exercises, newExercise]})
    }

    submitNewWorkout = e => {
        e.preventDefault()
        const newWorkout = {
            id: Date.now(),
            ...this.state
        }
        this.props.addWorkout(newWorkout)
        this.clearInputs()
    }
    
    render() {

        let allExercises;
        if (this.state.exercises[0]) {
            allExercises = this.state.exercises.map(exercise => {
               return <Exercise key={exercise.id} exercise={exercise}  />
            })
        }

        return (
            <section className='workoutform' >
                <h1>Create a new Workout!</h1>
                <section className='exercises-workoutform'>
                    {allExercises}
                </section>
                {this.state.exercises[0] ? <button onClick={() => this.submitNewWorkout()}>Add Workout</button> : ''}
                <p>Begin by Adding Exercises below</p>
                <ExerciseForm newExercises={this.props.newExercises} exercises={this.props.exercises} addExercise={this.addExercise} pictures={this.props.pictures}/>

                
                
            </section >
        )
    }
}

export default WorkoutForm