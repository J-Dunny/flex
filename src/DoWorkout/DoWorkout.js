import React from "react"
import Exercise from "../Exercise/Exercise";

const DoWorkout = ({ oneWorkout }) => {




    let exercises = oneWorkout.exercises.map(exercise => {
        return (
            <article key={exercise.id}>
                <img className="exercise-img" src={exercise.gifUrl} />
                <div>
                    <p>{exercise.name}</p>
                    <p>Equipment: {exercise.equipment}</p>
                </div>
            </article>
        )
    })

    return (
        <section>
            <h1>{oneWorkout.title}</h1>
            <section>
                {exercises}
            </section>

        </section>
    )
}

export default DoWorkout