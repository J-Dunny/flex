import React, { Component } from 'react'
import './ExerciseForm.css'

class ExerciseForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            img: '',
            name: '',
            set1: '',
            set2: '',
            set3: ''

        }

    }

    //for each exercise create an options for the drop down
    // handel change to change inputs of the state to add to form

    submitNewTrick = e => {
        e.preventDefault()
        const newExercise = {
            id: Date.now(),
            ...this.state
        }
        this.props.addExercise(newExercise)
        this.clearInputs()
    }

    clearInputs = () => {
        this.setState({
            img: '',
            name: '',
            set1: '',
            set2: '',
            set3: ''
        })
    }

    changeHandler = (e) => {
        this.setState({ ...this.state, [e.target.name]: e.target.value })
    }

    render() {

        return (
            <form className='exercise-from'>
                <select name="exersise" value={this.state.name} onChange={e => this.changeHandler(e)}>

                </select>
                <section className='set-inputs'>
                    <div className='sets'>
                        <label>Set 1:</label>
                        <input placeholder='Reps'></input>
                        <input placeholder='Weight'></input>
                    </div>
                    <div className='sets'>
                        <label>Set 2:</label>
                        <input placeholder='Reps'></input>
                        <input placeholder='Weight'></input>
                    </div>
                    <div className='sets'>
                        <label>Set 3:</label>
                        <input placeholder='Reps'></input>
                        <input placeholder='Weight'></input>
                    </div>
                </section>
                <button>Add Exercise</button>
            </form>
        )
    }

}

export default ExerciseForm