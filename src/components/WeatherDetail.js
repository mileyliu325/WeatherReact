import React, { Component } from "react";
// import logo from './logo.svg';
// import './App.css';
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import "../bootstrap.css";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

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
  margin-left:20%;
`;

const SumContainer = styled.div`
  width: 100%;
  margin-left:20%;
  color: #fff;
`;
const OtherContainer = styled.div`
 display:flex;
 flex-direction:row;
`;
const HumidityContainer = styled.div`
  width: 100%;
  /* height: 8%; */
  /* margin-left: 20%; */
  /* margin-top: 10%; */
  color: #fff;
`;

const WindContainer = styled.div`
  width: 100%;
  /* height: 8%; */
  /* margin-left: 60%; */
  /* margin-top: -5%; */
  color: #fff;
`;
