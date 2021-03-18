import React from "react";
import DetailList from './detail-list';
import { shallow } from 'enzyme';

const detailData = {
    title: 'test title',
    altText: 'some image',
    images: ['<img src="www.testurl.com" />', '<img src=www.testurl-another.com />'],
    price: '500.00',
    displaySpecialOffer: 'test display offer',
    includedService: 'test included service',
    productInformation: 'a great product',
    code: '777777',
    attributes: [],
};

test('renders the detail list', () => {
    const detailListWrapper = shallow(<DetailList {...detailData} />);

    expect(detailListWrapper).toHaveLength(1);
    expect(detailListWrapper.find('.product-details-container')).toHaveLength(1);
});


test('renders the Slider with correct url and alt text', () => {
    const detailListWrapper = shallow(<DetailList {...detailData} />);

    expect(detailListWrapper.find('Slider')).toHaveLength(1);
    expect(detailListWrapper.find('Slider').props()).toEqual({
        images: ['<img src="www.testurl.com" />', '<img src=www.testurl-another.com />']
    });
});

test('renders the Price with correct price and floatLeft prop', () => {
    const detailListWrapper = shallow(<DetailList {...detailData} />);

    expect(detailListWrapper.find('Price')).toHaveLength(1);
    expect(detailListWrapper.find('Price').props()).toEqual({
        floatLeft: false,
        price: "500.00"
    });
});

test('renders the special offer if displaySpecialOffer is passed', () => {
    const detailListWrapper = shallow(<DetailList {...detailData} />);

    expect(detailListWrapper.find(".product-display-offer")).toHaveLength(1);
    expect(detailListWrapper.find(".product-display-offer").text()).toEqual('test display offer');
});

test('does not render the special offer if displaySpecialOffer is an empty string', () => {
    detailData.displaySpecialOffer = '';
    const detailListWrapper = shallow(<DetailList {...detailData} />);

    expect(detailListWrapper.find(".product-display-offer")).toHaveLength(0);
});

test('renders the included service if includedService is passed', () => {
    const detailListWrapper = shallow(<DetailList {...detailData} />);

    expect(detailListWrapper.find(".product-small-text").at(0)).toHaveLength(1);
    expect(detailListWrapper.find(".product-small-text").at(0).text()).toEqual('test included service');
});

test('does not render the included service if includedService is an empty string', () => {
    detailData.includedService = '';
    const detailListWrapper = shallow(<DetailList {...detailData} />);

    expect(detailListWrapper.find(".product-display-offer")).toHaveLength(0);
});

test('renders the product information if productInformation is passed', () => {
    const detailListWrapper = shallow(<DetailList {...detailData} />);

    expect(detailListWrapper.find(".product-details-paragraph")).toHaveLength(1);
});

test('renders the product code if it is passed', () => {
    const detailListWrapper = shallow(<DetailList {...detailData} />);

    expect(detailListWrapper.find(".product-small-text").at(1)).toHaveLength(1);
    expect(detailListWrapper.find(".product-small-text").at(1).text()).toEqual('Product code: 777777');
});

test('does not render the AttributesSet if it is not passed', () => {
    const detailListWrapper = shallow(<DetailList {...detailData} />);

    expect(detailListWrapper.find("AttributeSet")).toHaveLength(0);
});

test('renders the AttributesSet if it is passed', () => {
    const detailData = {
        title: 'test title',
        altText: 'some image',
        images: ['<img src="www.testurl.com" />', '<img src=www.testurl-another.com />'],
        price: '500.00',
        displaySpecialOffer: 'test display offer',
        includedService: 'test included service',
        productInformation: 'a great product',
        code: '777777',
        attributes: [{
            name: "test name attribute",
            value: "text value attribute"
        }]
    };

    const detailListWrapper = shallow(<DetailList {...detailData} />);

    expect(detailListWrapper.find("AttributeSet")).toHaveLength(1);
    expect(detailListWrapper.find("AttributeSet").props()).toEqual({
        attributes: [{
            name: "test name attribute",
            value: "text value attribute"
        }]
    })
});
