import React from "react";
import Product from './product';
import { shallow } from 'enzyme';

test('renders the product', () => {
    const props = {
        productId: '12345',
        title: "Bosch Serie 4 SMS46MI01G Freestanding Dishwasher, Grey",
        price: "529.00",
        image: "//johnlewis.scene7.com/is/image/JohnLewis/238008957?"
    };
    const productWrapper = shallow(<Product {...props} />);

    expect(productWrapper).toHaveLength(1);
    expect(productWrapper.find('.product')).toHaveLength(1);
});

test('renders the title of the product', () => {
    const props = {
        productId: '12345',
        title: "Bosch Serie 4 SMS46MI01G Freestanding Dishwasher, Grey",
        price: "529.00",
        image: "//johnlewis.scene7.com/is/image/JohnLewis/238008957?"
    };
    const productWrapper = shallow(<Product {...props} />);

    expect(productWrapper.find('.product-title').text()).toEqual('Bosch Serie 4 SMS46MI01G Freestanding Dishwasher, Grey');
});


test('renders the price of the product', () => {
    const props = {
        productId: '12345',
        title: "Bosch Serie 4 SMS46MI01G Freestanding Dishwasher, Grey",
        price: "529.00",
        image: "//johnlewis.scene7.com/is/image/JohnLewis/238008957?"
    };
    const productWrapper = shallow(<Product {...props} />);

    expect(productWrapper.find('Price').length).toEqual(1);
});

test('renders the image of the product', () => {
    const props = {
        productId: '12345',
        title: "Bosch Serie 4 SMS46MI01G Freestanding Dishwasher, Grey",
        price: "529.00",
        image: "//johnlewis.scene7.com/is/image/JohnLewis/238008957?"
    };
    const productWrapper = shallow(<Product {...props} />);

    expect(productWrapper.find('img').prop('src')).toEqual('//johnlewis.scene7.com/is/image/JohnLewis/238008957?');
});

