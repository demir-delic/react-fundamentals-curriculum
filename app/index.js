import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";

// render our App component to an element with an ID of app
ReactDOM.render(
    <App />, // How to tell React that you want to use a component
    document.getElementById("root") // must include a div with the ID of app within our HTML
);