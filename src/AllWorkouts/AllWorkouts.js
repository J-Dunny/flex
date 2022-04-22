import React from "react"
import Workout from "../Workout/Workout"
import { NavLink } from "react-router-dom"
import './AllWorkouts.css'

const AllWorkouts = ({ workouts }) => {
    let workoutCards;
    console.log("workouts", workouts)
    if (workouts[0]) {
        workoutCards = workouts.map(workout => {
            return <Workout key={workout} workout={workout} />
        })
    }

    return (
        <div>
            <NavLink to="/addworkout"><button>Create Workout</button></NavLink>
            <h2>All your workouts</h2>

            <section className="all-workouts">

                {workoutCards}
            </section>
        </div>
    )
}

export default AllWorkouts