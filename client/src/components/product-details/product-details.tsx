import React, {useEffect, useState} from "react";
import axios from "axios";
import './product-details.css';
import DetailList from "../detail-list/detail-list"

interface DetailListInterface {
    title: string,
    altText: string,
    urls: string[],
    price: string,
    displaySpecialOffer: string,
    includedService: string,
    productInformation: string,
    code: string,
    attributes: any,
}

const ProductDetails: ({match}: { match: any }) => false | any = ({ match }) => {
    const { params: { id } } = match;
    const [productResults, setProductResults] = useState<DetailListInterface>({
        title: '',
        altText: '',
        urls: [],
        price: '',
        displaySpecialOffer: '',
        includedService: '',
        productInformation: '',
        code: '',
        attributes: [],
    });
    useEffect(() => {
        const getDishwasher = async () => {
            const result = await axios(`http://localhost:3001/dishwasher/${id}`);
            setProductResults(result.data)
        };

        getDishwasher();
    }, []);

    return (
         <DetailList {...productResults} />
    )
};

export default ProductDetails;
