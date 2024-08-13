import React, { useContext } from "react";
import { GlobalContext } from "../../../context";

function ContextTextComponent() {
    const setTheThemeContext = useContext(GlobalContext);
    const { theme } = setTheThemeContext;
    return (
        <div>
            <h1
                style={{
                    fontSize: theme === "light" ? "50px" : "100px",
                    backgroundColor: theme === "light" ? "white" : "black",
                    color: theme === "light" ? "blue" : "pink",
                }}
            >
                ContextTextComponent Theme{" "}
            </h1>
        </div>
    );
}

export default ContextTextComponent;
