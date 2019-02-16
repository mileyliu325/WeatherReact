import React, { Component } from 'react';
import styled from "styled-components";
import {getDayOfWeek,getWeatherKeyWord} from "../utilities";

class WeatherWeek extends Component {

    constructor(props){
        super();
       console.log("props:"+props.date);
    }
  render() {
    const day = getDayOfWeek(this.props.date);
    const weather  = getWeatherKeyWord(this.props.sum);
    return (
     
           <WeekContainer className="align-self-center" >
                      <DateContainer> <h3 className="card-title">{day}</h3></DateContainer>
                      <IconContainer><img src={this.props.icon} alt="" /></IconContainer>
                     <TempContainer> <h5 className="card-subtitle">{this.props.temp} °C </h5></TempContainer>
                      <SumContainer>  <h6 className="card-subtitle">
                       {this.props.sum}
                      </h6>
                      </SumContainer>
          </WeekContainer>
    );
  }
}

export default WeatherWeek;

const WeekContainer = styled.div`
  
    display:flex;
    width:90%;
    height:60%;
    flex-direction:column;
    justify-content:space-between;
    align-items:flex-start;
`;

const DateContainer = styled.div`
 flex:2;
`;
const IconContainer = styled.div`
flex:3;
`;

const TempContainer = styled.div`
flex:2;
`;
const SumContainer = styled.div`
flex:2;
`;

