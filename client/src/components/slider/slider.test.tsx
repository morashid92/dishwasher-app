import React from "react";
import Slider from './slider';
import { shallow } from 'enzyme';

test('renders the Carousel with correct image urls', () => {
    const sliderWrapper = shallow(<Slider urls={['www.test.com', 'www.test2.com']} altText={''} />);

    expect(sliderWrapper).toHaveLength(1);
    expect(sliderWrapper.find('Carousel')).toHaveLength(1);

    expect(sliderWrapper.find('img').at(0).props().src).toEqual('www.test.com');
    expect(sliderWrapper.find('img').at(1).props().src).toEqual('www.test2.com');
});

test('renders the Carousel with correct alt text for all images', () => {
    const sliderWrapper = shallow(<Slider urls={['www.test.com', 'www.test2.com']} altText={'an image of a dishwasher'} />);

    expect(sliderWrapper).toHaveLength(1);
    expect(sliderWrapper.find('Carousel')).toHaveLength(1);

    expect(sliderWrapper.find('img').at(0).props().alt).toEqual('an image of a dishwasher');
    expect(sliderWrapper.find('img').at(1).props().alt).toEqual('an image of a dishwasher');
});
