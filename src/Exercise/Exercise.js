import React from "react"
import './Exercise.css'

const Exercise = ({exercise}) => {


    console.log('props',exercise)
    return (
        <section className="exercise">
            <img className="exercise-img" src={exercise.gifUrl}/>
            <p>{exercise.name}</p>
            <div>
                <p>{exercise.set1Reps} x {exercise.set1Weight} lbs</p>
                <p>{exercise.set2Reps} x {exercise.set2Weight} lbs</p>
                <p>{exercise.set3Reps} x {exercise.set3Weight} lbs</p>
            </div>

        </section>
    )


}

export default Exercise