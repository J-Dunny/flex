import React from "react"
import Exercise from "../Exercise/Exercise"
import './Workout.css'

const Workout = ({workout}) => {
    let exercises;
    console.log("workout",workout)
    if(workout){
        exercises = workout.exercises.map(exercise => {
            console.log("exercise",exercise)
            return <Exercise key={exercise.id} exercise={exercise}/>
        })
    }
    
    return (
        <section className="workout">
            <h1>{workout.title}</h1>
            {exercises}
            <button>Do it!</button>
        </section>
    )
}

export default Workout