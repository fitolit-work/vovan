import Day from "./Day"
import React from "react"

const Trening = ({ title, trenings }) => {
    console.log(trenings);
    return (
        <article>
            <header>
                <h1>{title}</h1>
            </header>
            <div className="week">
                {trenings.map((trening, i) => (
                    <Day
                        key={i}
                        name={trening.name}
                        description={trening.description}
                        exercises={trening.exercises}
                    />))}
            </div>
        </article>
    )
};

export default Trening;