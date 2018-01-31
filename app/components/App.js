import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Landing from "./Landing";
import Search from "./Search";
import Forecast from "./Forecast";

export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="app">
                    <Header />
                    <Route exact path="/" component={Landing} />
                    <Route path="/forecast" component={Forecast} />
                </div>
            </BrowserRouter>
        )
    }
}