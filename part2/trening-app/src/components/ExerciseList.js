import React from "react";
import Exercise from "./Exercise";


function ExerciseList({ exercises }) {
    return (
        <ul className='ex-list'>
            {exercises.map((exercise, item) => (
                <Exercise item={item} exercise={exercise}/>
            ))}
        </ul>
    )
}

export default ExerciseList;