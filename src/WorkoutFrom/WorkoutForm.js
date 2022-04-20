import React, { Component } from 'react'
import ExerciseFrom from '../ExerciseForm/ExerciseFrom'
import Exercise from '../Exercise/Exercise'

class WorkoutForm extends Component {
    constructor(props){
        super(props)
        this.state= {
            exercises: []
        }
    }



    render(){

        //above the workout form will be the exercises added from the exercise form
        const allExercies = this.state.exercises.map(exercise => {
            <Exercise img={exercise.image} exercises={this.props.exercises}/>
        })
        return (
            <div>
                <section className='exercises-workoutform'>

                </section>
            <form className='workout-form'>
                <h1>Create a new Workout!</h1>
                <p>list of workouts added</p>

                <input type='submin' />
            </form>
            </div>
        )
    }
}

export default WorkoutForm