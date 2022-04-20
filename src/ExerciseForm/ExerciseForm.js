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
            set1Reps: '',
            set1Weight: '',
            set2Reps: '',
            set2Weight: '',
            set3Reps: '',
            set3Weight: ''
        })
    }

    changeHandler = (e) => {
        this.setState({ ...this.state, [e.target.name]: e.target.value })
    }

    render() {
        let options;
        if(this.props.exercises[0]){
            options = this.props.exercises.map(exercise => {
                return <option key={exercise.id} value={exercise.name}>{exercise.name}</option>
            })
        }
        
        return (
            <form className='exercise-form'>
                <select name="exersise" value={this.state.name} onChange={e => this.changeHandler(e)}>
                {options}
                </select>
                <section className='set-inputs'>
                    <div className='sets'>
                        <label>Set 1:</label>
                        <input name='set1Reps' placeholder='Reps' onChange={(e) => this.changeHandler(e)}></input>
                        <p className='x'>x</p>
                        <input name='set1Weight' placeholder='Weight' onChange={(e) => this.changeHandler(e)}></input>
                    </div>
                    <div className='sets'>
                        <label>Set 2:</label>
                        <input name='set2Reps' placeholder='Reps' onChange={(e) => this.changeHandler(e)}></input>
                        <p className='x'>x</p>
                        <input name='set2Weight' placeholder='Weight' onChange={(e) => this.changeHandler(e)}></input>
                    </div>
                    <div className='sets'>
                        <label>Set 3:</label>
                        <input name='set3Reps' placeholder='Reps' onChange={(e) => this.changeHandler(e)}></input>
                        <p className='x'>x</p>
                        <input name='set3Weight' placeholder='Weight' onChange={(e) => this.changeHandler(e)}></input>
                    </div>
                </section>
                <button>Add Exercise</button>
            </form>
        )
    }

}

export default ExerciseForm