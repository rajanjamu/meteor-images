// Import a React Library
import React from 'react';
import ReactDOM from 'react-dom'
import ImageList from './components/image_list'

// Create a component
const App = () => {
    return (
        <div>
            <ImageList />
        </div>
    );
}

// Render this component on the screen after waiting for HTML to load
Meteor.startup(() => {
    ReactDOM.render(<App />, document.querySelector('.container'));
});
