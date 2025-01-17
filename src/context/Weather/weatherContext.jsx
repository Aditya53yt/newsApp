import { createContext, useReducer } from "react";
import weatherReducer from "./weatherReducer";

const WeatherContext= createContext()
export const WeatherProvider=({children})=>{
    const intitalState={
        weatherdata:[]
    }
    
 
 const[state, dispatch]=useReducer(weatherReducer,intitalState)

return(
    <WeatherContext.Provider  value={{...state,dispatch}}>
        {children}
    </WeatherContext.Provider>
)

}
export default WeatherContext