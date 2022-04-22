import React, { Component } from "react"
import Exercise from "../Exercise/Exercise";

class DoWorkout extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }



    
render(){
    console.log(this.props)
    let exercises = this.props.oneWorkout.exercises.map(exercise => {
        return (
            <Exercise key={exercise.id} exercise={exercise} id={this.props.oneWorkout.id} />
            // <article className="exercise" key={exercise.id}>
            //     <img className="exercise-img" src={exercise.gifUrl} />
            //     <div>
            //         <p>{exercise.name}</p>
            //         <p>Equipment: {exercise.equipment}</p>
            //     </div>
            //     <form>
            //         <input></input>
            //         <input></input>
            //     </form>
            // </article>
        )
    })
    return (
        <section>
            <h1>{this.props.oneWorkout.title}</h1>
            <section>
                {exercises}
            </section>

        </section>
    )
}
    
}

export default DoWorkout