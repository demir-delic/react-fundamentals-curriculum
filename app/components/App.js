import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import Landing from "./Landing";
import Search from "./Search";
import Forecast from "./Forecast";

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="app">
                    <Header />
                    <Route exact path="/" component={Landing} />
                    <Route path="/forecast" component={Forecast} />
                </div>
            </Router>
        )
    }
}