import Slider from "../slider/slider";
import Price from "../price/price";
import AttributeSet from "../attribute-set/attribute-set";
import React from "react";

interface DetailListInterface {
    title: string,
    altText: string,
    urls: string[],
    price: string,
    displaySpecialOffer: string,
    includedService: string,
    productInformation: string,
    code: string,
    attributes: any,
}

const DetailList: React.FC<DetailListInterface> = ({title, altText, urls, price, displaySpecialOffer, includedService, productInformation, code, attributes}) => {
    return (
        <div className="product-details-container">
            <div className="product-details-title">{title}</div>
            <Slider urls={urls} altText={altText}/>
            <div className="product-details">
                <Price price={price} floatLeft={false}/>
                {displaySpecialOffer && <div className="product-display-offer">{displaySpecialOffer}</div>}
                {includedService && <div className="product-small-text">{includedService}</div>}
                <p>Product Information</p>
                <div className="product-small-text product-details-paragraph" dangerouslySetInnerHTML={{__html: productInformation}}></div>
                <div className="product-small-text">{`Product code: ${code}`}</div>
                <div className="product-borders-top"></div>
                <p>Product specification</p>
                {attributes && attributes.length > 0 && <AttributeSet attributes={attributes}/>}
            </div>
        </div>
    )
}

export default DetailList;
