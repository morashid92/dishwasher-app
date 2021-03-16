import React from "react";
import './product.css';

interface ProductProps {
    productId: string
    image: string
    title: string
    price: string
}
const Product: React.FC<ProductProps> = ({ image, title, price }) => {
    return (
        <div className="product">
            <img className="product-image" src={image} alt="image of dishwasher" />
            <div className="product-description" >
                <div tabIndex={1} className="product-title">{title}</div>
                <div tabIndex={1} className="product-price">{`£${price}`}</div>
            </div>
        </div>
    )
};

export default Product;
