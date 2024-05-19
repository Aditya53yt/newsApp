import React, { useContext, useEffect } from 'react'
import ThemeContext from '../../context/Theme/ThemeContext'
import Carousal from '../Carousal'
import Card from './Card'
import WeatherCard from './weatherCard'
import NewsContext from '../../context/news/NewsContext'
import { fetchNews } from '../../context/news/NewsAction'
import { ScaleLoader } from 'react-spinners'


const Home = () => {
 const{allNews,dispatch}=useContext(NewsContext)

 const getNews = async () => {
  const data = await fetchNews("Indore");
  dispatch({
    type: "GET_NEWS",
    payload: data,
  });
};

useEffect(()=>{

getNews()

},[])

if(!allNews||allNews.length===0)
  {
    return(
     <div className='text-center display-9'>
      <ScaleLoader color="Red" />
      </div>
    )   
     }

  return (
  <>
       <Carousal/>
       <div className="container-fluid p-5">
<h3 className='text-center my-3'>Top News</h3>
       </div>
       <div className="row g-3 my-3">
        <div className="col-sm-12 col-md-4">
          <WeatherCard />
        </div>
        <div className="col-sm-12 col-md-8">
       { allNews.map((news,index)=><Card key={index} news={news}/>)}
        </div>
      </div>
       </>
  )
}

export default Home