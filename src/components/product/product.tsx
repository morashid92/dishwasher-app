import React from "react";
interface ProductProps {
    productId: string
    image: string
    title: string
    price: string
}

const Product = ({ image, title, price}:ProductProps) => {
    return (
        <div className="product">
            <img src={image} />
            <div className="product-title">{title}</div>
            <div className="product-price">{price}</div>
        </div>
    )
};

export default Product;
