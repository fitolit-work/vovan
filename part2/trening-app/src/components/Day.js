import React from "react"
import ExerciseList from "./ExerciseList"

function Day({ name, description, exercises }) {
    return ( 
        <div> 
            <h2>{name}</h2>
            <p>{description}</p>
            <ExerciseList exercises={exercises} />
        </div>
    )
}

export default Day;