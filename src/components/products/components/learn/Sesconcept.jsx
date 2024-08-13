import React, { useState } from "react";

function UsereducerConcept() {
    const [increment, setIncrement] = useState(0);

    const handle = () => {
        setIncrement((prev) => prev + 1);
    };
    const handle2 = () => {
        setIncrement((prev) => prev - 1);
    };

    return (
        <div>
            <h1> {increment}</h1>

            <button
                onClick={handle}
                style={{
                    border: "1px solid green",
                    padding: "5px",
                    width: "145px",
                    color: "green",
                    borderRadius: "5px",
                }}
            >
                increment
            </button>
            <button
                onClick={handle2}
                style={{
                    border: "1px solid red",
                    padding: "5px",
                    width: "145px",
                    color: "red",
                    borderRadius: "5px",
                    marginLeft: "8px",
                }}
            >
                decrement
            </button>
        </div>
    );
}

export default UsereducerConcept;
