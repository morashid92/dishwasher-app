import React from "react";
import Product from './product';
import { shallow } from 'enzyme';

test('renders the product if it passed', () => {
    const productWrapper = shallow(<Product/>);

    expect(productWrapper).toHaveLength(1);
    expect(productWrapper.find('.product')).toHaveLength(1);
});
