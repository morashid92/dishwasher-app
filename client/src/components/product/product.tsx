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
            <img className="product-image" src={image} />
            <div className="product-description" >
                <div className="product-title">{title}</div>
                <div className="product-price">{`£${price}`}</div>
            </div>
        </div>
    )
};

export default Product;
