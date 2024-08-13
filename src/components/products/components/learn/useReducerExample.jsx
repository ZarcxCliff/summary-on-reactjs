import React, { useReducer } from "react";
const initialState = {
    showText: false,
    changeTextStyle: false,
};
const reducer = (state, action) => {
    switch (action.type) {
        case HIDE_TEXT:
            return {
                ...state,
                showText: false,
            };
        case SHOW_TEXT:
            return {
                ...state,
                showText: true,
            };
        case CHANGE_TEXT_STYLE:
            return {
                ...state,
                changeTextStyle: !state.changeTextStyle,
            };
        default:
            return state;
    }
};
const HIDE_TEXT = "HIDE_TEXT";
const SHOW_TEXT = "SHOW_TEXT";
const CHANGE_TEXT_STYLE = "CHANGE_TEXT_STYLE";
function UseReducerExample() {
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state);

    return (
        <div>
            {state?.showText ? (
                <h3
                    style={{
                        color: state?.showText ? "pink" : null,
                        background: state?.changeTextStyle ? "blue" : "purple",
                    }}
                >
                    This is the year of miracles
                </h3>
            ) : null}
            <button
                style={{
                    border: "1px solid red",
                    padding: "5px",
                    width: "145px",
                    color: "red",
                    borderRadius: "5px",
                }}
                onClick={() => dispatch({ type: HIDE_TEXT })}
            >
                Hide text
            </button>
            <button
                style={{
                    border: "1px solid blue",
                    padding: "5px",
                    width: "145px",
                    color: "blue",
                    borderRadius: "5px",
                }}
                onClick={() => dispatch({ type: SHOW_TEXT })}
            >
                show text
            </button>
            <button
                style={{
                    border: "1px solid green",
                    padding: "5px",
                    width: "145px",
                    color: "green",
                    borderRadius: "5px",
                }}
                onClick={() => dispatch({ type: CHANGE_TEXT_STYLE })}
            >
                change text style
            </button>
        </div>
    );
}

export default UseReducerExample;
