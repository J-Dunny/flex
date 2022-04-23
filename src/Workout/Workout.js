import React from "react"
import Exercise from "../Exercise/Exercise"
import { NavLink } from "react-router-dom"
import './Workout.css'

const Workout = ({ workout, deleteWorkout }) => {
    let exercises;

    if (workout) {
        exercises = workout.exercises.map(exercise => {
            return <Exercise key={exercise.id} id={workout.id} exercise={exercise} />
        })
    }

    return (
        <section className="workout">
            <div className="button">
                <button className="delete-button" onClick={() => deleteWorkout(workout.id)}>❌</button>
            </div>
            <h1>{workout.title}</h1>
            {exercises}
            <NavLink to={`/doworkout/${workout.id}`}><button>Do it!</button></NavLink>
        </section>
    )
}

export default Workout