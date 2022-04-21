import React from "react"
import Workout from "../Workout/Workout"

const AllWorkouts = ({workouts}) => {
    let workoutCards;
    console.log(workouts)
    if(workouts[0]){
        workoutCards = workouts.map(workout => {
            return <Workout workout={workout} />
        })
    }
    
    return (
        <section className="all-workouts">
            <h1>All your workouts</h1>
            {workoutCards}
        </section>
    )
}

export default AllWorkouts