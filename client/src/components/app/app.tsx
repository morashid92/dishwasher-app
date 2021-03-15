import Product from "../product/product";
import React, {useEffect, useState} from "react";
import axios from "axios";

const App: React.FC = () => {
    const [results, setResults] = useState([]);


    useEffect(() => {
        const getAllDishwashers = async () => {
            const result = await axios('http://localhost:3001/dishwashers');
            setResults(result.data.products)
        };

        getAllDishwashers();
    }, []);

    return (
        <div className="container">
            { results.map((result: any, index: number) => (
                <Product
                    key={index}
                    productId="1234"
                    title={result.title}
                    price={result.price.now}
                    image={result.image}/>
            ))}
        </div>
    )
};

export default App;
