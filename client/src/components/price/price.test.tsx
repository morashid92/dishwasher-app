import React from "react";
import Price from './price';
import { shallow } from 'enzyme';

test('renders the price in the correct format', () => {
    const priceWrapper = shallow(<Price price={'500.00'} floatLeft={false} />);

    expect(priceWrapper).toHaveLength(1);
    expect(priceWrapper.find('.product-price').text()).toEqual('£500.00');
});

test('renders the price with product-price-left class when floatLeft is true', () => {
    const priceWrapper = shallow(<Price price={'500.00'} floatLeft={true} />);

    expect(priceWrapper).toHaveLength(1);
    expect(priceWrapper.find('.product-price-left').length).toEqual(1);
});

