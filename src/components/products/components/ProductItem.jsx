import React from "react";

const ButtonComp = () => {
    return <button>click</button>;
};

function ProductItem({ eachProduct, id }) {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "20px",
                width: "600px",
                border: "1px solid blue",
            }}
            key={id}
        >
            <p>{eachProduct}</p>
            <ButtonComp />
        </div>
    );
}

export default ProductItem;
