export const getWeather=async(city)=>{
    const response=await fetch(`https://api.weatherapi.com/v1/current.json?key=358195dd52164c68bc9151600242102&q=${city}&aqi=yes`)
    const data=response.json()
    return data
  
}
  