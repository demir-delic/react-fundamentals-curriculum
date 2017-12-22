var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');

// What components are concerned with:
// state
// lifecycle events
// UI (the only thing that is always handled by a component)

class App extends React.Component {
    render() {
        return (
            // JSX, not HTML. This is run through Webpack and transpiled (to JavaScript) by Babel
            <div>
                Hello world!
            </div>
        )
    }
}

// render our App component to an element with an ID of app
ReactDOM.render(
    <App />, // How to tell React that you want to use a component
    document.getElementById('app') // must include a div with the ID of app within our HTML
);