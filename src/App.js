import React, { Component } from 'react';
import DisplayW from "./Component/DisplayW";
import './App.css';
import Axios from 'axios';

class App extends Component {
state = {                         
    cd:{
      latitude:50,
      longitude:60
    },
    weather: {},
    regionInput: ""
  };


  componentDidMount(){
   //Here we get location of device
 if(navigator.geolocation)
 {
   navigator.geolocation.getCurrentPosition((pos)=>{
    let c={
      latitude:pos.coords.latitude,
      longitude:pos.coords.longitude
    }
    this.setState({cd:c})
   
 Axios.get(`http://api.weatherstack.com/current?access_key=ce5112796e06fdeff01c5a7f44bcf04d
&query=${this.state.cd.latitude},${this.state.cd.longitude}`).then((response)=>
{
  console.log(response);
let info = {
            temperature: response.data.current.temperature,
            description: response.data.current.weather_descriptions[0],
            location: response.data.location.name,
            region: response.data.location.region,
            country: response.data.location.country,
            wind_speed: response.data.current.wind_speed,
            presopnsesure: response.data.current.presopnsesure,
            precip: response.data.current.precip,
            humidity: response.data.current.humidity,
            img: response.data.current.weather_icons
          }
                this.setState({ weather: info });
})
})
 }
  }
  
  render() {
    return (
      
      <div>
       <h1>Weather App</h1>
         <DisplayW info={this.state.weather}/>
         <h4 className="name">Made by Saksham Tomar</h4>
      </div>
     
    );
  }
}

export default App;
