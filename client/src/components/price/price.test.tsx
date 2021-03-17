import React from "react";
import Price from './price';
import { shallow } from 'enzyme';

test('renders the price in the correct format', () => {
    const productWrapper = shallow(<Price price={'500.00'} floatLeft={false} />);

    expect(productWrapper).toHaveLength(1);
    expect(productWrapper.find('.product-price').text()).toEqual('£500.00');
});

test('renders the price with product-price-left class when floatLeft is true', () => {
    const productWrapper = shallow(<Price price={'500.00'} floatLeft={true} />);

    expect(productWrapper).toHaveLength(1);
    expect(productWrapper.find('.product-price-left').length).toEqual(1);
});

