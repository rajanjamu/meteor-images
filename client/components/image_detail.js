// Import React
import React from 'react'

// Create our component
const ImageDetail = (props) => {
    return (
        <li>
            <img src={props.image.link} />
            {props.image.title}
        </li>
    );
}

// Export our component
export default ImageDetail;