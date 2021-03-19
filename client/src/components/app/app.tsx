import React, {useEffect, useState} from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductDetails from '../product-details/product-details';
import './app.css';

import ProductSet from "../product-set/product-set";

const App: React.FC = () => {
    const [results, setResults] = useState([]);

    useEffect(() => {
        const getAllDishwashers = async () => {
            const result = await axios('http://localhost:3001/dishwashers');
            setResults(result.data)
        };

        getAllDishwashers();
    }, []);

    return (
        <Router>
            <h1 tabIndex={-1} hidden> 20 results of Dishwashers</h1>
            <Switch>
                <Route
                    exact
                    path="/"
                    render={() =>
                        <ProductSet results={results} />}
                />
                <Route path="/product/:id" component={ProductDetails} />
            </Switch>
        </Router>
    )
};

export default App;
