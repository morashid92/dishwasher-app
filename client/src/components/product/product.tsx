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
        <Link to={`/product/${productId}`}>
            <div className="product">
                <img className="product-image" src={image} alt="image of dishwasher" />
                <div className="product-description" >
                    <div tabIndex={1} className="product-title">{title}</div>
                    <Price price={price} floatLeft />
                </div>
            </div>
        </Link>
    )
};

export default Product;
