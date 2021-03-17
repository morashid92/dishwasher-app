import React from "react";
import AttributeSet from './attribute-set';
import { shallow } from 'enzyme';

test('renders the attributes name and value of the product', () => {
    const props = {
        attributes: [
            {
                name: 'test name',
                value: 'test value'
            },
            {
                name: 'test name 2',
                value: 'test value 2'
            }
        ]
    };
    const productWrapper = shallow(<AttributeSet {...props} />);

    expect(productWrapper).toHaveLength(1);
    expect(productWrapper.find('.attribute-name').first().text()).toEqual('test name');
    expect(productWrapper.find('.attribute-value').first().text()).toEqual('test value');
    expect(productWrapper.find('.attribute-name').at(1).text()).toEqual('test name 2');
    expect(productWrapper.find('.attribute-value').at(1).first().text()).toEqual('test value 2');
});

