// Import a React Library
import React from 'react';
import ReactDOM from 'react-dom'

// Create a component
const App = () => {
    return (
        <div>
            React App #2
        </div>
    );
}

// Render this component on the screen after waiting for HTML to load
Meteor.startup(() => {
    ReactDOM.render(<App />, document.querySelector('.container'));
});
