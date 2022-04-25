import React, { Component } from "react"
import { NavLink } from "react-router-dom";
import Exercise from "../Exercise/Exercise";
import "./DoWorkout.css"

class DoWorkout extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        let exercises = this.props.oneWorkout.exercises.map(exercise => {
            return (
                <Exercise key={exercise.id} exercise={exercise} id={this.props.oneWorkout.id} />
            )
        })

        return (
            <section>
                <NavLink to="/home"><button>Home</button></NavLink>
                <h1>{this.props.oneWorkout.title}</h1>
                <section className="do-workout-exercises" >
                    {exercises}
                </section>
            </section>
        )
    }
}

export default DoWorkout