import React, { useContext, useEffect } from 'react'
import { getWeather } from '../../context/Weather/weatherAction';

import WeatherContext from '../../context/Weather/weatherContext';
import { ScaleLoader } from 'react-spinners';
const weatherCard = () => {
 
 const{weatherdata,dispatch}=useContext(WeatherContext)

//  console.log(weatherdata.condition.icon);
console.log()
  
  const fetchWeather=async(city)=>{
    const data= await getWeather(city)
    console.log(city);
    dispatch({
      type:'GET_WEATHER',
      payload:data
    })
  }


useEffect(()=>{
fetchWeather('indore')

},[])
if(!weatherdata||weatherdata.length===0){
  <div className='text-center display-9'>
  <ScaleLoader color="Red" />
  </div>

}
 
    return(
    <div className={ "card p-5 bg-light text-dark p-5" }>
    <div className="d-flex align-items-center justify-content-between">
      <span>
        <h3 className='text-danger'>Today weather</h3>
        <h1>{weatherdata.current?.temp_c}<sup></sup></h1>
        <h3>{weatherdata.location?.name}</h3>
      </span>
      <span>
        <img
          style={{ height: "50px" }}
          src={weatherdata.current?.condition.icon}
          alt=""
        />
        <p>sunny</p>
      </span>
    </div>
  </div>
    )
};


export default weatherCard