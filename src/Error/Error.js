import React from "react"
import { NavLink } from "react-router-dom"

const Error = ({ error }) => {
    return (
        <div>
            <h1 style={{ color: "white" }}>{error}</h1>
            <NavLink to='/home'><button>Home</button></NavLink>
        </div>
    )
}

export default Error