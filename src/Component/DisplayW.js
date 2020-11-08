import React from "react";    
import "./DisplayW.css"            
const displayW = (props) => {
const { temperature, description, location, region, country, wind_speed, humidity, img } = props.info;
console.log(props.info);
  return (
   <div className="main" >
    <div className="col-md-9">
                    <img className="mainImg" src={img} alt="weather-img" />
                </div>
         <div className="temp">
         <h1>{temperature}<sup>o</sup>C , {description}</h1>
        <h4>{location}</h4>
        <p>{region} , {country}</p>
      </div>
      <div className="details">     
        <div className="a">
                    <p><b>Wind Speed</b>(km/hr)</p>
                    <h2>{wind_speed}</h2>
         </div>
                <div className="b">
                    <p><b>Humidity</b>(%)</p>
                    <h2>{humidity}</h2>
                </div>
           </div>  
   </div>
  )
};
export default displayW; 