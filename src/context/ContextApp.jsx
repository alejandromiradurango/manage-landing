import { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
    sidebar: false
}

export const ContextApp = ({children}) => {

    const [sidebar, setSidebar] = useState(initialState.sidebar);

    return (
        <StateContext.Provider
            value= {{
                sidebar,
                setSidebar
            }}
        >
            {children}
        </StateContext.Provider>
    )

}

export const useStateContext = () => useContext(StateContext);