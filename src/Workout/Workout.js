import React from "react"
import Exercise from "../Exercise/Exercise"
import { NavLink } from "react-router-dom"
import './Workout.css'

const Workout = ({ workout, deleteWorkout }) => {
    let exercises;

    if (workout) {
        exercises = workout.exercises.map(exercise => {
            return <Exercise key={exercise.id} exercise={exercise} />
        })
    }

    return (
        <section className="workout">
            <button onClick={() => deleteWorkout(workout.id)}>X</button>
            <h1>{workout.title}</h1>
            {exercises}
            <NavLink to={`/doworkout/${workout.id}`}><button>Do it!</button></NavLink>
        </section>
    )
}

export default Workout