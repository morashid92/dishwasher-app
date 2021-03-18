import React from "react";
import './product.css';
import Price from "../price/price";
import { Link } from "react-router-dom";

interface ProductProps {
    productId: string
    image: string
    title: string
    price: string
}

const Product: React.FC<ProductProps> = ({ image, title, price, productId}) => {
    return (
        <div className="product">
            <img className="product-image" src={image} alt="image of dishwasher" />
            <div className="product-description" >
                <Link to={`/product/${productId}`}><div tabIndex={1} className="product-title">{title}</div></Link>
                <Price price={price} floatLeft />
            </div>
        </div>
    )
};

export default Product;
