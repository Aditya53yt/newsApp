import React, { useContext } from 'react'
import { FaMoon ,FaSun} from "react-icons/fa";
import ThemeContext from '../context/Theme/ThemeContext';



const ThemeButton = () => {
    const{theme,dispatch}=useContext(ThemeContext)
     const handleTheme=()=>{
        dispatch({
            type:"CHANGE_THEME"
        })

     }
  return (
    <button className={theme?"btn btn-dark":"btn btn-warning"} id="theme-btn" onClick={handleTheme}>{theme?<FaMoon/>:<FaSun/>}</button>
  )
}

export default ThemeButton