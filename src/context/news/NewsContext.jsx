import { createContext, useReducer } from "react";
import NewsReducer from "./NewsReducer";

const NewsContext=createContext()

 export const NewsProvider=({children})=>{

    const intitalState={
        allNews:[]
    }
    const[ State,dispatch]=useReducer(NewsReducer,intitalState)
  return (
    <NewsContext.Provider value={{...State,dispatch}}>
        {children}
    </NewsContext.Provider>
  )
 }
  
 

export default NewsContext