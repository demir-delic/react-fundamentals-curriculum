import React from "react";
import Search from "./Search"

export default class Landing extends React.Component {
    render() {
        return (
            <div className="landing-container" style={{ backgroundImage: "url('app/images/pattern.svg')" }}>
                <h1>Enter a City and State</h1>
                <Search flexDirection="column"/>
            </div>
        )
    }
}