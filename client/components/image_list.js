// Import React
import React from 'react';
import ImageDetail from './image_detail'

const clientId = 'ed184e8cc7394aa';

// Create our component
const ImageList = (props) => {
    const validImages = props.images.filter(image => !image.is_album)

    const RenderedImages = validImages.map(image => {
        return <ImageDetail key={image.title} image={image} />
    })

    return (
        <ul className="media-list list-group">
            { RenderedImages }
        </ul>
    );
}

// Export our component
export default ImageList;