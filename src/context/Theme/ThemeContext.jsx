import { createContext } from "react";
import ThemeReducer from "./ThemeReducer";
import { useReducer } from "react";

const ThemeContext=createContext()
 



export const ThemeProvider=({children})=>{

    const initialState={
        theme:true
     }
     const[state,dispatch] = useReducer(ThemeReducer,initialState)
    return(
    <ThemeContext.Provider value={{...state,dispatch}}>
        {children}
    </ThemeContext.Provider>
    )
}
export default ThemeContext