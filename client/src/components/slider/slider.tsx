import React from "react";
import Carousel from 'nuka-carousel';

interface SliderProps {
    urls: string[]
    altText: string
}
const Slider: React.FC<SliderProps> = ({ urls , altText}) => {
    return <>
        <Carousel>
            {urls.map((url, index) => {
                return (<img key={index} src={url} alt={altText} /> )
            })}
        </Carousel>
    </>
};

export default Slider;
