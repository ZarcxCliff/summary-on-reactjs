// import { useEffect, useState } from "react";
import "./App.css";
import ContextButtonComponent from "./components/products/components/context_concept/ContextButton";
import ContextTextComponent from "./components/products/components/context_concept/ContextText";
// import Sestateconcept from "./components/usereducerconcept";
// import Eeducermainconcept from "./components/usereducerconcept";
// import Compnnt from "./components/Compnnt";
// import ProductList from "./components/products/ProductList";
// import Users from "./components/users";
import Decrement from "./components/products/components/learn/Decrement";
import Sesconcept from "./components/products/components/learn/Sesconcept";
import UseReducerExample from "./components/products/components/learn/useReducerExample";

function App() {
    // let list_prod = document.querySelector('get_this')
    // const personArray = [
    //     { name: "cliff", age: 29, country: "cameroon" },
    //     { name: "joel", age: 30, country: "france" },
    //     { name: "demean", age: 27, country: "canada" },
    // ];
    // const getName = personArray.map((nameArray, index) => {
    //     return (
    //         <div key={index}>
    //             {nameArray.name}
    //             <li>{nameArray.country}</li>
    //             <h1>{nameArray.age}</h1>
    //         </div>
    //     );
    // });
    // const getCountry = personArray.find((nameCountry, index) => {
    //     return nameCountry.country === "cameroon";
    // });
    // const getStats = personArray.filter((age, index) => {
    //     return age.age < 30;
    // });
    // console.log(getStats);
    // console.log(getCountry);
    // console.log(getName);
    // const [changeColor, setChangeColor] = useState("blue");
    // const handleClick = () => {
    //     setChangeColor("green");
    // };
    // const dummyProductData = ["prodcut1", "product2", "product3"];
    // const [count, setCount] = useState(0);
    // useEffect(() => {
    //     if (count === 5) {
    //         setChangeColor("yellow");
    //     } else if (count === 10) {
    //         setChangeColor("purple");
    //     } else {
    //         setChangeColor("red");
    //     }
    // }, [count]);
    return (
        <div className="App">
            <h1 className="get_this">Number of users in this company</h1>
            {/* <Users /> */}
            {/* /* <Compnnt /> */}
            {/* <ProductList
                name="cliff"
                dummyProductData={dummyProductData}
                classLevel="high_class"
            /> */}{" "}
            {/* <button
                style={{
                    color: changeColor,
                    width: "105px",
                    margin: "10px",
                    padding: "10px",
                    fontSize: "18px",
                    fontWeight: "bold",
                }}
                onClick={handleClick}
            >
                Click Me
            </button>
            <h1>{count}</h1>
            <button
                onClick={() => setCount(count + 1)}
                style={{ color: changeColor ? "yellow" : "pink" }}
            >
                Click me
            </button> */}
            <ContextTextComponent />
            <ContextButtonComponent />
            <Decrement />
            <Sesconcept />
            <UseReducerExample />
        </div>
    );
}

export default App;
