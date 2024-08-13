import React, { useContext } from "react";
import { GlobalContext } from "../../../context";

function ContextButtonComponent() {
    const changeThemeContext = useContext(GlobalContext);
    const { setTheme, theme, recipe, changeRecipe } = changeThemeContext;

    return (
        <div>
            <h1>{recipe}</h1>
            <button
                onClick={() => {
                    setTheme(theme === "light" ? "dark" : "light");
                }}
                style={{
                    border: "1px solid red",
                    padding: "6px",
                    borderRadius: "5px",
                }}
            >
                {" "}
                ContextButtonComponent
            </button>
            <button
                onClick={() => (theme === "light" ? recipe : changeRecipe())}
                style={{
                    border: "1px solid green",
                    padding: "6px",
                    borderRadius: "5px",
                    color: "purple",
                    marginLeft: "8px",
                }}
            >
                change recipe
            </button>
        </div>
    );
}

export default ContextButtonComponent;
