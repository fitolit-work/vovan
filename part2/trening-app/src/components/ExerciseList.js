import React from "react";

function ExerciseList({ exercises }) {
    return (
        <ul className='ex-list'>
            {exercises.map((exercise, i) => (
                <li key={i}>
                    <span>{exercise.count}</span>
                    <span>{exercise.name}</span>
                </li>
            ))}
        </ul>
    )
}

export default ExerciseList;