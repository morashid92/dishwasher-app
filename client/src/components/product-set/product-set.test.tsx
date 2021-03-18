import React from "react";
import ProductSet from './product-set';
import { shallow } from 'enzyme';

test('renders the Product with correct props', () => {
    const props = {
        results: [
            {
                productId: '12345',
                title: "Bosch Serie 4 SMS46MI01G Freestanding Dishwasher, Grey",
                price: { now: '500.00' },
                image: "//johnlewis.scene7.com/is/image/JohnLewis/238008957?"
            }
        ]
    };
    const productWrapper = shallow(<ProductSet {...props} />);

    expect(productWrapper).toHaveLength(1);
    expect(productWrapper.find('.container')).toHaveLength(1);
});
