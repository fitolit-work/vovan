import React from "react";
import ReactDOM from "react-dom";
import data from "./../data/trenings.json"
import Trening from "./components/Trening";




ReactDOM.render(
    <Trening title="Trening week" trenings={data} />,
    document.getElementById("root")
);