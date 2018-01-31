import React from "react";
import ReactDOM from "react-dom";

export default class Search extends React.Component {
    render() {
        return (
            <div className="search" style={{ flexDirection: this.props.flexDirection }}>
                <input type="text" placeholder="Boise, Idaho" />
                <button type="button">Get Weather</button>
            </div>
        )
    }
}