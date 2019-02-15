import React, { Component } from "react";
import styled from "styled-components";
import "../bootstrap.css";

class WeatherDetail extends Component {
  constructor(props) {
    super();
    this.state = {};
    // const { classes } = styles;
  }
  render() {
    return (
      <WeatherContainer>
        <TempContainer>
          <p> {this.props.temp} °C</p>
        </TempContainer>

        <SumContainer>
          <h4>{this.props.condition}</h4>
        </SumContainer>

        <OtherContainer>

        <HumidityContainer>
          <h6>HUMIDITY</h6>
          <h6>{this.props.humidity}%</h6>
        </HumidityContainer>

        <div></div>

        <WindContainer>
          <h6>Wind</h6>
          <h6>{this.props.wind}K/m</h6>
        </WindContainer>

        </OtherContainer>
        
      </WeatherContainer>
    );
  }
}

export default WeatherDetail;

const WeatherContainer = styled.div`
    width:70%;
    height:60%;
    margin-left:15%;
    margin-top:10%;
    margin-bottom:10%;
    margin-right:15%;
    display:flex;
    flex-direction:column;
`;

const TempContainer = styled.div`
  width: 100%;
  font-size: 50px;
  color: #fff;
  margin-left:30%;
`;

const SumContainer = styled.div`
  width: 60%;
  margin-left:20%;
  color: #fff;
`;
const OtherContainer = styled.div`
 display:flex;
 flex-direction:row;
 margin-top:5%;
`;
const HumidityContainer = styled.div`
  width: 100%;
  color: #fff;
`;

const WindContainer = styled.div`
  width: 100%;

  color: #fff;
`;
