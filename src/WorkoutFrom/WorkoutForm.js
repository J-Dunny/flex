import React, { Component } from 'react'
import ExerciseForm from '../ExerciseForm/ExerciseForm'
import Exercise from '../Exercise/Exercise'
import './WorkoutForm.css'

class WorkoutForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            exercises: []
        }
    }

    addExercise = (newExercise) => {
        this.setState({ exercises: [...this.state.exercises, newExercise] })
    }

    changeHandler = (e) => {
        this.setState({ ...this.state, [e.target.name]: e.target.value })
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

    clearInputs = () => {
        this.setState({
            title:'',
            exercises: []
        })
    }

    render() {

        let allExercises;
        if (this.state.exercises[0]) {
            allExercises = this.state.exercises.map(exercise => {
                return <Exercise key={exercise.id} exercise={exercise} />
            })
        }

        return (
            <section className='workoutform' >
                <h1>Create a new Workout!</h1>
                <section className='exercises-workout-form'>
                    {allExercises}
                </section>
                <form>
                    {this.state.exercises[0] ?
                        <input
                            name="title"
                            value={this.state.title}
                            onChange={e => this.changeHandler(e)}
                            placeholder="Workout Name"
                        >
                        </input> : ""}
                    {this.state.exercises[0] ? <button onClick={(e) => this.submitNewWorkout(e)}>Add Workout</button> : ''}
                </form>

                <p>Begin by Adding Exercises below</p>
                <ExerciseForm newExercises={this.props.newExercises} exercises={this.props.exercises} addExercise={this.addExercise} pictures={this.props.pictures} />



            </section >
        )
    }
}

export default WorkoutForm