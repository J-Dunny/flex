import React, { Component } from 'react'

class ExerciseFrom extends Component {
    constructor(){
        super()
        this.state={
            exercise:{
                picture: '',
                name: '',
                set1: '',
                set2: '',
                set3: ''
            }
        }

    }

    //for each exercise create an options for the drop down
    // handel change to change inputs of the state to add to form

render(){
    return (
        <form className='exercise-from'>
            <select>

            </select>
            <label>Set 1:</label>
            <input></input>
            <label>Set 2:</label>
            <input></input>
            <label>Set 3:</label>
            <input></input>
            <input type='submit' />
        </form>
    )
}
    
}

export default ExerciseFrom