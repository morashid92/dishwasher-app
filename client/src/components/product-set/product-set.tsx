import React from "react";
import Product from "../product/product";


interface ProductProps {
    results: any
}

const ProductSet: React.FC<ProductProps> = ({ results }) => {
    return <div className="container">
        {results.map((result: any, index: number) => (
            <Product
                key={index}
                productId={result.productId}
                title={result.title}
                price={result.price.now}
                image={result.image}/>
        ))}
    </div>
};

export default ProductSet;
