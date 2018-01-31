import React from "react";
import ReactDOM from "react-dom";
import Search from "./Search"

export default class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <h1>React Weather App</h1>
                <Search flexDirection="row"/>
            </div>
        )
    }
}