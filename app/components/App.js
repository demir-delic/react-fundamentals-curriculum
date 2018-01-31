import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header"
import Search from "./Search"

export default class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Header />
                <div className="landing-container" style={{ backgroundImage: "url('app/images/pattern.svg')" }}>
                    <h1>Enter a City and State</h1>
                    <Search />
                </div>
            </div>
        )
    }
}