import React, { Component } from 'react'
import './ExerciseForm.css'

class ExerciseForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            category: '',
            name: '',
            // set1Reps: '',
            // set1Weight: '',
            // set2Reps: '',
            // set2Weight: '',
            // set3Reps: '',
            // set3Weight: ''
        }
    }

    //for each exercise create an options for the drop down
    // handel change to change inputs of the state to add to form

    changeHandler = (e) => {
        this.setState({ ...this.state, [e.target.name]: e.target.value })
    }

    submitNewExercise = e => {
        e.preventDefault()
        // const exercise = this.props.exercises.find(exercise => exercise.name === this.state.name)

        // const image = this.props.pictures.find(picture => picture.exercise_base === exercise.exercise_base)

        const exercise = this.props.newExercises.find(workout => workout.name === this.state.name)
        console.log(exercise)

        let newExercise = {
            id: exercise.id,
            equipment: exercise.equipment,
            gifUrl: exercise.gifUrl,
            target: exercise.target,
            ...this.state
        }
        // if(image){
        //     newExercise.img = image.image
        // }
        console.log(newExercise)
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
        console.log(this.props)
        let targets = []
        let categories;
        if (this.props.newExercises[0]) {
            this.props.newExercises.forEach(exercise => {
                if (!targets.includes(exercise.target)) {
                    targets.push(exercise.target)
                }
            })

            categories = targets.map(target => {
                return <option key={target} value={target}>{target}</option>
            })
        }

        console.log(targets)

        let options;
        if (this.props.newExercises[0]) {
            options = this.props.newExercises.map(exercise => {
                return <option key={exercise.id} value={exercise.name}>{exercise.name}</option>
            })
        }

        return (
            <form className='exercise-form' onSubmit={this.submitNewExercise}>
                <select name="category" value={this.state.category} onChange={e => this.changeHandler(e)}>
                    {categories}
                </select>
                <select name="name" value={this.state.name} onChange={e => this.changeHandler(e)}>
                    {options}
                </select>
                {/* <section className='set-inputs'> */}
                {/* <div className='sets'>
                        <label>Set 1:</label>
                        <input name='set1Reps' placeholder='Reps' value={this.state.set1Reps} onChange={(e) => this.changeHandler(e)}></input>
                        <p className='x'>x</p>
                        <input name='set1Weight' placeholder='Weight' value={this.state.set1Weight} onChange={(e) => this.changeHandler(e)}></input>
                    </div>
                    <div className='sets'>
                        <label>Set 2:</label>
                        <input name='set2Reps' placeholder='Reps' value={this.state.set2Reps} onChange={(e) => this.changeHandler(e)}></input>
                        <p className='x'>x</p>
                        <input name='set2Weight' placeholder='Weight' value={this.state.set2Weight} onChange={(e) => this.changeHandler(e)}></input>
                    </div>
                    <div className='sets'>
                        <label>Set 3:</label>
                        <input name='set3Reps' placeholder='Reps' value={this.state.set3Reps} onChange={(e) => this.changeHandler(e)}></input>
                        <p className='x'>x</p>
                        <input name='set3Weight' placeholder='Weight' value={this.state.set3Weight} onChange={(e) => this.changeHandler(e)}></input>
                    </div> */}
                {/* </section> */}
                <button>Add Exercise</button>
            </form>
        )
    }

}

export default ExerciseForm