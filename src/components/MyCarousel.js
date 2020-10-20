import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import '../App.css';

const MyCarousel = ({ images }) => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            {images.map(image => {
                return (
                    <Carousel.Item>
                        <img key={image.id}
                            className="d-block w-100"
                            src={image.img}
                            alt={image.title}
                        />
                        <Carousel.Caption>
                            <h3>{image.title}</h3>
                            <p>{image.description}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            })}
        </Carousel>
    );
}

// render(<ControlledCarousel />);
export default MyCarousel;