import React from 'react';
import { CarouselProvider, Slider, Slide, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default function Carousel({children, className}) {
    return (
        <CarouselProvider
            naturalSlideWidth={60}
            naturalSlideHeight={40}
            totalSlides={children.length}
            interval={180}
            // isPlaying={true}
            className={className + ' relative'}
        >
            <Slider>
                {children.map((child,i) => <Slide index={i}>{child}</Slide>)}
            </Slider>
            <div className="testimonial-dot-group absolute bottom-0 w-full left-0">
                {children.map((child,i) => <Dot slide={i} className="w-3 h-3 m-4 bg-gray-300 hover:bg-gray-600 disabled:bg-red-500 rounded-full"/>)}
            </div>
            {/* <ButtonBack>Back</ButtonBack>
            <ButtonNext>Next</ButtonNext> */}
        </CarouselProvider>
    );
}