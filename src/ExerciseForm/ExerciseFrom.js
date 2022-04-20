import React, { Component } from 'react'

class ExerciseFrom extends Component {
    constructor(){
        super()

    }
    //for each exercise create an options for the drop down
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