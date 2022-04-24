import React, { Component } from "react"
import './Exercise.css'

class Exercise extends Component {
    constructor(props) {
        super(props)
        this.state = {
            reps: '',
            weight: '',
            sets: []
        }
    }

    changeHandler = (e) => {
        this.setState({ ...this.state, [e.target.name]: e.target.value })
    }

    addSet = e => {
        e.preventDefault()
        const newSet = {
            reps: this.state.reps,
            weight: this.state.weight
        }
        this.setState({
            sets: [...this.state.sets, newSet],
            reps: '',
            weight: '',
        })


    }

    render() {
        const doWorkoutPage = `https://flex-react-app.herokuapp.com/doworkout/${this.props.id}`
        // console.log("win",window.location.href)
        // console.log("do",doWorkoutPage)
        let allSets;
        if (this.state.sets[0]) {
            allSets = this.state.sets.map((set, i) => {
                return <p key={i}>Set {i += 1}: {set.reps} reps x {set.weight} lbs </p>
            })
        }

        return (
            <section className="exercise">
                <img className="exercise-img" src={this.props.exercise.gifUrl} />
                <div>
                    <p>{this.props.exercise.name}</p>
                    <p>Equipment: {this.props.exercise.equipment}</p>
                </div>
                {window.location.href === doWorkoutPage &&
                    <div>
                        {allSets}
                        <form onSubmit={(e) => this.addSet(e)}>
                            <div className="set-form">
                                <p>Add Set:</p>
                                <input
                                    value={this.state.reps}
                                    name="reps"
                                    placeholder="Repetitions"
                                    onChange={(e) => this.changeHandler(e)}
                                    required
                                >
                                </input>
                                <input name="weight"
                                    value={this.state.weight}
                                    placeholder="Weight"
                                    onChange={(e) => this.changeHandler(e)}
                                    required
                                >
                                </input>
                                <button>+</button>
                            </div>
                        </form>
                    </div>
                }
            </section>
        )
    }



}

export default Exercise