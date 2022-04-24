import React from "react"
import { NavLink } from "react-router-dom"

const NoMatch = () => {
    return (
        <div>
            <h1>This page does not exist</h1>
            <NavLink to="/home"><button>Home</button></NavLink>
        </div>
    )
}

export default NoMatch