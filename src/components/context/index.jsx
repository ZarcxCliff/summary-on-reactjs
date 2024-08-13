import { createContext, useState } from "react";

//create the context
export const GlobalContext = createContext(null);

//create the global state that receipe component as a children

function GlobalState({ children }) {
    const [theme, setTheme] = useState("light");
    const [recipe, setRecipe] = useState("rice and beans");
    const changeRecipe = () => {
        setRecipe("rice & stew");
    };

    return (
        <GlobalContext.Provider
            value={{ theme, setTheme, recipe, changeRecipe }}
        >
            {children}
        </GlobalContext.Provider>
    );
}

export default GlobalState;
