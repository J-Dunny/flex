import React from "react"
import './Exercise.css'

const Exercise = ({ exercise }) => {


    
    return (
        <section className="exercise">
            <img className="exercise-img" src={exercise.gifUrl} />
            <div>
                <p>{exercise.name}</p>
                <p>Equipment: {exercise.equipment}</p>
            </div>
            {/* <div>
                <input></input>
                <input></input>
            </div> */}
        </section>
    )


}

export default Exercise