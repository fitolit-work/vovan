import React from "react";

function Exercise({ exercise, item }) {
    return (
        <li key={item}>
            <span>{exercise.count}</span>
            <span>{exercise.name}</span>
        </li>
    )
}


export default Exercise;