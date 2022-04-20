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

        //above the workout form will be the exercises added from the exercise form
        let allExercises;
        if (this.state.exercises[0]) {
            allExercises = this.state.exercises.map(exercise => {
                <Exercise img={exercise.image} name={exercise.name} />
            })
        }

        return (
            <section className='workoutform' >
                <h1>Create a new Workout!</h1>
                <section className='exercises-workoutform'>
                    {allExercises}
                </section>
                {/* <form className='workout-form'> */}
                <ExerciseForm exercises={this.props.exercises}/>

                <button onClick={() => this.submitNewWorkout()}>Add Workout</button>
                {/* </form> */}
            </section >
        )
    }
}

export default WorkoutForm