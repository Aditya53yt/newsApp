const weatherReducer=(state,action)=>{
    switch(action.type)
    {
       case "GET_WEATHER":
           return{
               ...state,
               weatherdata:action.payload
           }
           default:
           return state
    }
       }
       export default weatherReducer