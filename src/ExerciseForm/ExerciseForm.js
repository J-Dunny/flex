import React, { Component } from 'react'
import './ExerciseForm.css'

class ExerciseForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            category: '',
            name: '',
        }
    }

    changeHandler = (e) => {
        this.setState({ ...this.state, [e.target.name]: e.target.value })
    }

    submitNewExercise = (exercise) => {
        this.props.addExercise(exercise)
        this.clearInputs()
    }

    clearInputs = () => {
        this.setState({
            name:'',
            category: ''
        })
    }

    render() {
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

        let allOptions;
        if (this.state.category) {
           let options = this.props.newExercises.filter(exercise => exercise.target === this.state.category)
            console.log("cat",this.state.category)
            console.log("options", options)
            allOptions = options.map(exercise => {
                return (
                    <article className='exercise-card' key={exercise.gifUrl}>
                        <img className='category-img' src={exercise.gifUrl}/>
                        <p>{exercise.name}</p>
                        <button onClick={() => this.submitNewExercise(exercise)}>Add Exercise</button>
                    </article>
                )
            })
        }

        return (
            <form className='exercise-form' >
                <select placeholder='Choose Category' name="category" value={this.state.category} onChange={e => this.changeHandler(e)}>
                    <option value='' disabled >Choose Category</option>
                    {categories}
                </select>
                <section className='exercise-cards-section'>
                    {allOptions}
                </section>   
            </form>
        )
    }

}

export default ExerciseForm


                // {/* <select name="name" value={this.state.name} onChange={e => this.changeHandler(e)}>
                //     {options}
                // </select> */}
                // {/* <section className='set-inputs'> */}
                // {/* <div className='sets'>
                //         <label>Set 1:</label>
                //         <input name='set1Reps' placeholder='Reps' value={this.state.set1Reps} onChange={(e) => this.changeHandler(e)}></input>
                //         <p className='x'>x</p>
                //         <input name='set1Weight' placeholder='Weight' value={this.state.set1Weight} onChange={(e) => this.changeHandler(e)}></input>
                //     </div>
                //     <div className='sets'>
                //         <label>Set 2:</label>
                //         <input name='set2Reps' placeholder='Reps' value={this.state.set2Reps} onChange={(e) => this.changeHandler(e)}></input>
                //         <p className='x'>x</p>
                //         <input name='set2Weight' placeholder='Weight' value={this.state.set2Weight} onChange={(e) => this.changeHandler(e)}></input>
                //     </div>
                //     <div className='sets'>
                //         <label>Set 3:</label>
                //         <input name='set3Reps' placeholder='Reps' value={this.state.set3Reps} onChange={(e) => this.changeHandler(e)}></input>
                //         <p className='x'>x</p>
                //         <input name='set3Weight' placeholder='Weight' value={this.state.set3Weight} onChange={(e) => this.changeHandler(e)}></input>
                //     </div> */}
                // {/* </section> */}
                // {/* <button>Add Exercise</button> */}