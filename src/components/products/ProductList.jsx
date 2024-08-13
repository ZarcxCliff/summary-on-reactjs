// import React, { useEffect, useState } from "react";
// import ProductItem from "./components/ProductItem";
// import ProductItem from "./components/ProductItem";

function ProductList({ name, classLevel, dummyProductData }) {
    // const [flag, setFlag] = useState(false);
    // useEffect(() => {
    //     setFlag(!flag);
    //     console.log("run only once");
    // }, []); //if the dependency is empty the page will load only once

    return (
        <div>
            <h1>Product List for an E-commerce Project</h1>
            {/* <ProductItem /> */}
            {/* {flag ? (
                <h2>
                    my name is {name} and I am from this {classLevel}{" "}
                </h2>
            ) : (
                <h2>just tell me my name</h2>
            )}

            {dummyProductData.map((item, index) => {
                return <ProductItem eachProduct={item} id={index} />;
            })}
            <button onClick={() => setFlag(!flag)}>Toggle</button> */}
        </div>
    );
}

export default ProductList;
