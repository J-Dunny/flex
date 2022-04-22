import React from "react"
import Workout from "../Workout/Workout"
import { NavLink } from "react-router-dom"
import './AllWorkouts.css'

const AllWorkouts = ({ workouts, deleteWorkout }) => {
    let workoutCards;

    if (workouts[0]) {
        workoutCards = workouts.map(workout => {
            return <Workout key={workout} workout={workout} deleteWorkout={deleteWorkout} />
        })
    }

    return (
        <div>
            <NavLink to="/addworkout"><button>Create Workout</button></NavLink>
            {workouts[0] ? <h2>All your workouts</h2> : <h2>You haven't created any workouts yet. Click Create Workout to begin!</h2>}
            <section className="all-workouts">
                {workoutCards}
            </section>
        </div>
    )
}

export default AllWorkouts