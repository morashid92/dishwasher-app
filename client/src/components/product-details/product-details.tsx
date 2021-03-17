import React, {useEffect, useState} from "react";
import axios from "axios";
import './product-details.css';
import Price from "../price/price";
import AttributeSet from "../attribute-set/attribute-set";

interface ProductDetailProps {
    match: { params: { id: number } }
}

interface Results {
    title: string,
    altText: string,
    urls: string[],
    price: string,
    displaySpecialOffer: string,
    includedService: string,
    productInformation: string,
    code: string,
    attributes: any
}

const ProductDetails: React.FC<ProductDetailProps> = ({ match }) => {
    const { params: { id } } = match;
    const [results, setResults] = useState<Results>({
        title: '',
        altText: '',
        urls: [],
        price: '',
        displaySpecialOffer: '',
        includedService: '',
        productInformation: '',
        code: '',
        attributes: []
    });
    useEffect(() => {
        const getDishwasher = async () => {
            const result = await axios(`http://localhost:3001/dishwasher/${id}`);
            setResults(result.data)
        };

        getDishwasher();
    }, []);

    const { title, altText, urls, price, displaySpecialOffer, includedService, productInformation, code, attributes }: Results = results
    return (
        <div className="product-details-container">
            <div className="product-details-title">{title}</div>
            <img src="//johnlewis.scene7.com/is/image/JohnLewis/238078364?" alt={altText} />
            <div className="product-details">
                <Price price={price} floatLeft={false}/>
                {displaySpecialOffer && <div className="product-display-offer">{displaySpecialOffer}</div>}
                {includedService && <div className="product-small-text">{includedService}</div>}
                <p>Product Information</p>
                <div className="product-small-text" dangerouslySetInnerHTML={{__html: productInformation}}></div>
                <div className="product-small-text" >{`Product code: ${code}`}</div>
                <div className="product-borders-top"></div>
                <p>Product specification</p>
                {attributes && attributes.length > 0 && <AttributeSet attributes={attributes}/> }
            </div>
        </div>
    )
};

export default ProductDetails;
