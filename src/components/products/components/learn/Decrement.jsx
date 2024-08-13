import React, { useReducer } from "react";

function ReducerMainConcept() {
    const initialState = { count: 0 };
    const [state, dispatch] = useReducer(reducer, initialState);
    function handleIncrement() {
        dispatch({ type: "increment" });
    }

    function handleDecrement() {
        dispatch({ type: "decrement" });
    }
    function reducer(state, action) {
        switch (action.type) {
            case "increment":
                return { ...state, count: state.count + 1 };
            case "decrement":
                return { ...state, count: state.count - 1 };
            default:
                return "Unrecognized command";
        }
    }

    return (
        <div>
            <>
                <h1>Count:{state.count}</h1>
                <button onClick={handleIncrement}>Increment</button>
                <button onClick={handleDecrement}>Decrement</button>
            </>
        </div>
    );
}

export default ReducerMainConcept;
