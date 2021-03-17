import React from "react";
import './price.css';

interface PriceProps {
    price: string,
    floatLeft: boolean
}
const Price: React.FC<PriceProps> = ({ price , floatLeft}) => {
    return (
        <div tabIndex={1} className={floatLeft ? "product-price-left" : "product-price"}>{`£${price}`}</div>
    )
};

export default Price;
