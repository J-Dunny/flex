import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import ExerciseForm from '../ExerciseForm/ExerciseForm'
import Exercise from '../Exercise/Exercise'
import './WorkoutForm.css'
import { Redirect } from 'react-router-dom'

class WorkoutForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            exercises: [],
            added:""
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
        this.setState({added:"Your workout was added!!"})
        setTimeout(() => this.clearInputs(), 3000)
    }

    clearInputs = () => {
        this.setState({
            title: '',
            exercises: [],
            added: ''
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
            <section className='workout-form' >
                <NavLink to='/home'><button>View Your Workouts</button></NavLink>
                {this.state.added ? <h1 className='added'>{this.state.added}</h1> : <h1>Create a new Workout!</h1>}
                {this.state.added ? "" :<section className='exercises-workout-form'>
                    {allExercises}
                </section>}
                <form onSubmit={(e) => this.submitNewWorkout(e)}>
                    {this.state.exercises[0] ?
                        <input
                            name="title"
                            value={this.state.title}
                            onChange={e => this.changeHandler(e)}
                            placeholder="Workout Name"
                            required
                        />
                        : ""}
                    {this.state.title ? <button>Add Workout</button>: ''}
                </form>
                <p>Begin by Adding Exercises below</p>
                <ExerciseForm addedExercises={this.state.exercises} newExercises={this.props.newExercises} addExercise={this.addExercise} />
            </section >
        )
    }
}

export default WorkoutForm