import React from "react"
import Exercise from "../Exercise/Exercise"
import './Workout.css'

const Workout = ({workout}) => {
    let exercises;
    console.log(workout)
    if(workout[0]){
        exercises = workout.exercises.map(exercise => {
            return <Exercise key={exercise} exercise={exercise}/>
        })
    }
    
    return (
        <section className="workout">
            <h1>{workout.title}</h1>
            {exercises}
        </section>
    )
}

export default Workout