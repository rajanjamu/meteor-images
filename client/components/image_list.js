// Import React
import React from 'react';
import ImageDetail from './image_detail'

const IMAGES = [
    { title: 'Pen', link: 'https://dummyimage.com/600x400' },
    { title: 'Pine Tree', link: 'https://dummyimage.com/600x400' },
    { title: 'Mug', link: 'https://dummyimage.com/600x400' }
];

// Create our component
const ImageList = () => {
    const RenderedImages = IMAGES.map(image => {
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