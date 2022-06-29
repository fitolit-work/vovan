import React from "react";
import { FaStar } from "react-icons/fa";

const createArray = length => [...Array(length)]; // создает массив любой заданной длины

const Star = ({ selected = false }) => {// фигурные скобки нужны, потому что StarRating это компонент, компонент принимает только пропс, пропс это объект, а значит нужна деструктуризация в фигурных скобках
    return (
        <FaStar color={selected ? 'red' : 'grey'} />
    )
};

export default function StarRating({count = 15}) { // фигурные скобки нужны, потому что StarRating это компонент, компонент принимает только пропс, пропс это объект, а значит нужна деструктуризация в фигурных скобках
    return (
        createArray(count).map((item, i) => <Star key={i}/>)
    )
}