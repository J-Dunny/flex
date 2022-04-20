import React, { Component } from 'react'
import './ExerciseForm.css'

class ExerciseForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            set1Reps: '',
            set1Weight: '',
            set2Reps: '',
            set2Weight: '',
            set3Reps: '',
            set3Weight: ''
        }
    }

    //for each exercise create an options for the drop down
    // handel change to change inputs of the state to add to form

    changeHandler = (e) => {
        this.setState({ ...this.state, [e.target.name]: e.target.value })
    }

    submitNewExercise = e => {
        e.preventDefault()

        // const image = this.props.pictures.map(picture => )
        const newExercise = {
            id: Date.now(),
            img: '',
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

    render() {
        console.log(this.props.pictures)
        let options;
        if(this.props.exercises[0]){
            options = this.props.exercises.map(exercise => {
                return <option key={exercise.id} value={exercise.name}>{exercise.name}</option>
            })
        }
        
        return (
            <form className='exercise-form' onSubmit={this.submitNewExercise}>
                <select name="name" value={this.state.name} onChange={e => this.changeHandler(e)}>
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