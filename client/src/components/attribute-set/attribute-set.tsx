import React from "react";
import "./attrbitute-set.css";

interface AttributeSetProps {
    attributes: object[]
}
const AttributeSet: React.FC<AttributeSetProps> = ({ attributes } ) => {
    return <div>
        {attributes.map((attribute: any, index: number) => (
            <>
                <div className="product-borders-top"></div>
                <p className="product-small-text attribute-name">{attribute.name}</p>
                <p className="product-small-text attribute-value">{attribute.value}</p>
            </>
        ))}
    </div>
};

export default AttributeSet;
