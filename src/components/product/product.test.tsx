import React from "react";
import Product from './product';
import { shallow } from 'enzyme';

test('renders the product if its passed', () => {
    const props = {
        productId: '12345',
        title: "Bosch Serie 4 SMS46MI01G Freestanding Dishwasher, Grey",
        price: "529.00",
        image: "//johnlewis.scene7.com/is/image/JohnLewis/238008957?"
    };
    const productWrapper = shallow(<Product {...props} />);

    expect(productWrapper).toHaveLength(1);
    expect(productWrapper.find('.product')).toHaveLength(1);
    expect(productWrapper.find('.product-title')).toHaveLength(1);
    expect(productWrapper.find('.product-price')).toHaveLength(1);
    expect(productWrapper.find('img')).toHaveLength(1);
});

test('renders the price in the correct format', () => {
    const props = {
        productId: '12345',
        title: "Bosch Serie 4 SMS46MI01G Freestanding Dishwasher, Grey",
        price: "529.00",
        image: "//johnlewis.scene7.com/is/image/JohnLewis/238008957?"
    };
    const productWrapper = shallow(<Product {...props} />);

    expect(productWrapper.find('.product-price').text()).toEqual('£529.00');
});
