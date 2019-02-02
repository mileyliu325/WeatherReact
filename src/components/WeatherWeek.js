import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Button from '@material-ui/core/Button';

class WeatherWeek extends Component {

    constructor(props){
        super();
        this.state = {data:props};

    console.log("props:"+props);
    }
  render() {
      
    const data = this.state.data;
    console.log(data);
                             
    return (
      <div>
        {data && 
                data.forecastday && (
                //      const weeklist = data.forecastday.map( day => (
                //   <div>{day}</div>  ));    
                    
               <div>{
                 
                  }
                 </div>         // <WeatherWeek data={data.forecast}>
                        
                    // </WeatherWeek>
         )}

      {/* <Button variant="contained" color="primary">
       Hello World
     </Button> */}
     
      </div>
    );
  }
}

export default WeatherWeek;