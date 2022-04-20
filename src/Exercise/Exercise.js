import React from "react"

const Exercise = (props) => {
    console.log(props)
    // if (!props.exercises[0]) {
    //     return (
    //         <section className="exercise">
    //             <p>Loading...</p>
    //         </section>
    //     )
    // } else {
    if(props.exercises[0]){
        const exercises = props.exercises.map(workout => {
            return (
                <section key={workout.id} className="exercise">
                    <p>{workout.name}</p>
                </section>
            )
        })

        return exercises
    }

}

export default Exercise