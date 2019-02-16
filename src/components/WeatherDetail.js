import React, { Component } from "react";
import styled from "styled-components";
import "../bootstrap.css";

class WeatherDetail extends Component {
  constructor(props) {
    super();
    this.state = {};
  }
  render() {
    return (
      <WeatherContainer>
        <TempContainer>
           {this.props.temp} °C
        </TempContainer>
        <SumContainer>
          <h4>{this.props.condition}</h4>
        </SumContainer>
        <OtherContainer>
          <HumidityContainer>
            <h6>HUMIDITY</h6>
            <h6>{this.props.humidity}%</h6>
          </HumidityContainer>
         <Seperater></Seperater>
          <WindContainer>
            <h6>WIND</h6>
            <h6>{this.props.wind}K/m</h6>
          </WindContainer>
        </OtherContainer>
     
      </WeatherContainer>
    
    );
  }
}

export default WeatherDetail;

const WeatherContainer = styled.div`
  width: 70%;
  height: 60%;
  margin: 15%;
  margin-top: 15%;
  margin-bottom: 10%;
  margin-right: 15%;
  color: grey;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;    
 
`;

const TempContainer = styled.div`
  width: 60%;
  font-size: 50px;
  color: #fff;
  flex:5;
  display:flex;
  text-align: center; 
`;

const SumContainer = styled.div`
  width: 50%;
  color: #fff;
  flex:2;
  display:flex;
`;
const OtherContainer = styled.div`
height:50%;
  display: flex;
  flex-direction: row;
  margin-top: 5%;
  justify-content:flex-end;
  flex:2;
`;
const HumidityContainer = styled.div`
  width: 100%;
  color: #fff;
  flex:5;
`;

const WindContainer = styled.div`
  margin-left:20%;
  width: 100%;
  color: #fff;
  flex:5;
`;
const Seperater = styled.div`
  
  height: 60%;
  width:2px;
  background-color:white;
 
`;
