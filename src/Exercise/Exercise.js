import React, { Component } from "react"
import './Exercise.css'

const Exercise = ({ exercise, id }) => {
    const doWorkoutPage = `http://localhost:3000/doworkout/${id}`
    // console.log("win",window.location.href)
    // console.log("do",doWorkoutPage)

    return (
        <section className="exercise">
            <img className="exercise-img" src={exercise.gifUrl} />
            <div>
                <p>{exercise.name}</p>
                <p>Equipment: {exercise.equipment}</p>
            </div>
            {window.location.href === doWorkoutPage && <form>
                <input></input>
                <input></input>
            </form>}
        </section>
    )


}

export default Exercise