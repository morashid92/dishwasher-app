import Slider from "../slider/slider";
import Price from "../price/price";
import AttributeSet from "../attribute-set/attribute-set";
import React from "react";
import dompurify from 'dompurify';
import {Helmet} from "react-helmet";

const sanitizer = dompurify.sanitize;

interface DetailListInterface {
    title: string,
    altText: string,
    images: any,
    price: string,
    displaySpecialOffer: string,
    includedService: string,
    productInformation: string,
    code: string,
    attributes: any,
}

const DetailList: React.FC<DetailListInterface> = ({title, altText, price, displaySpecialOffer, includedService, productInformation, code, attributes, images}) => {

    return (
        <>
            <Helmet>
                <title>Dishwashers - {title}</title>
                <meta name="description" content={`Details about ${title}`} />
            </Helmet>
            <div className="product-details-container">
                <div tabIndex={1} className="product-details-title">{title}</div>
                <Slider images={images} />
                <div tabIndex={1} className="product-details">
                    <Price price={price} floatLeft={false}/>
                    {displaySpecialOffer && <div tabIndex={1} className="product-display-offer">{displaySpecialOffer}</div>}
                    {includedService && <div tabIndex={1} className="product-small-text">{includedService}</div>}
                    <p>Product Information</p>
                    <div className="product-small-text product-details-paragraph" tabIndex={1} dangerouslySetInnerHTML={{__html: sanitizer(productInformation)}}></div>
                    <div className="product-small-text" tabIndex={1} >{`Product code: ${code}`}</div>
                    <div className="product-borders-top"></div>
                    <p>Product specification</p>
                    {attributes && attributes.length > 0 && <AttributeSet attributes={attributes}/>}
                </div>
            </div>
        </>
    )
}

export default DetailList;
