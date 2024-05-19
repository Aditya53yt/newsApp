import React from 'react'
import Navbar from './component/Navbar'
import ThemeButton from './component/ThemeButton'
import Home from './component/Pages/Home'
import { NewsProvider } from './context/news/NewsContext'
import { WeatherProvider } from './context/Weather/weatherContext'

const App = () => {
  return (
    <NewsProvider>
    <Navbar/>
    <WeatherProvider>
    <Home/>
    </WeatherProvider>
   
    
    <ThemeButton/>
    </NewsProvider>
  )
}

export default App