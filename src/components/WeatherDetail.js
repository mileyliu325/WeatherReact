import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import '../bootstrap.css';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  });

class WeatherDetail extends Component {

    constructor(props){
        super();
        this.state = {
        };
        // const { classes } = styles;
    }
  render() {

  
    return (
      
<div >

    {/* <Grid container spacing={24}></Grid> */}

    {/* <Grid item xs={12}> */}
        <TempContainer className="align-self-center" >
             {this.props.temp}
         </TempContainer>
    
    {/* </Grid> */}

    {/* <Grid item xs={12}> */}
    <SumContainer>
    {this.props.condition}
      </SumContainer>
    {/* </Grid> */}


    {/* <Grid item xs={8}> */}
    <HumidityContainer>
          <h4>HUMIDITY</h4>
          <h4>{this.props.humidity}</h4>
    </HumidityContainer>
    
    
    
    {/* </Grid> */}
    
      

     
      <WindContainer>
        <h4>Wind</h4>
        <h4>{this.props.wind}</h4>

      </WindContainer>


      
      {/* <Grid container spacing = {8}>
      <h1>cloudy</h1>   
      
      </Grid> */}


   </div>   
     
      
    );
  }
}

export default WeatherDetail;

const TempContainer = styled.div`
 width:100%;
 height:8%;
 /* margin-left:20%; */
 margin-top:10%;
 font-size:50px;

 /* background-color: #000; */
 color: #fff;
`;

const SumContainer = styled.div`
width:100%;
height:8%;
margin-left:30%;
margin-top:10%;
color:#fff;
`;

const HumidityContainer = styled.div`
width:100%;
height:8%;
margin-left:20%;
margin-top:10%;
color:#fff;
`;

const WindContainer = styled.div`
width:100%;
height:8%;
margin-left:60%;
margin-top:-5%;
color:#fff;
`;