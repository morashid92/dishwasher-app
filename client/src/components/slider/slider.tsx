import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

interface SliderProps {
    images: any
}

const Slider: React.FC<SliderProps> = ({ images }) => {
    return <>
        <AliceCarousel
            items={images}
            autoPlayInterval={2000}
            autoPlayDirection="rtl"
            autoPlay={true}
        />
    </>
};

export default Slider;
