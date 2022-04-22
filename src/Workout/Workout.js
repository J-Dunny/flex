import React from "react"
import Exercise from "../Exercise/Exercise"
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
            <button>Do it!</button>
        </section>
    )
}

export default Workout