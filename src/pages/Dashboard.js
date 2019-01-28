// f2dbda67de814bf8bf895350192301
import React, { Component } from 'react';
// import logo from './logo.svg';

import '../bootstrap.css';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import WeatherDetail from '../components/WeatherDetail';


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

class Dashboard extends Component {

    constructor() {
        super();
        this.state = { data: null };
    }

    fetchData = async () => {
        axios
          .get("http://api.apixu.com/v1/current.json?key=f2dbda67de814bf8bf895350192301&q=Paris")
          .then(res => {
            const data = res.data;
            console.log(data);
            this.setState({ data: data });
            
          })
          .catch(err => {
            console.warn(err);
          });
      };
  
      componentDidMount() {
          this.fetchData();
      }


       
  render() {

    const data = this.state.data;
    console.log(data);
    return (
      <div >

      <BackgroundContainer className="row">

        <BoardContainer className="col-sm-10 col-md-10 col-lg-10 align-self-center">

            <DetailContainer>

            {data &&
             data.current&&(
            <WeatherDetail temp={data.current.temp_c}
                           humidity={data.current.humidity} 
                           wind={data.current.wind_mph} 
                           condition={data.current.condition.text} 
                           gridstyle={styles}
                        >
            </WeatherDetail>

             ) 
          }
              
            </DetailContainer>

            <WeekContainer>



            </WeekContainer>

        </BoardContainer>



      </BackgroundContainer>
     
      </div>
    );
  }
}


export default Dashboard;

const BackgroundContainer = styled.div`
 width:100%;
 height:100%;
  /* background-color: coral; */
  background-image: linear-gradient(66deg, deeppink, purple, blue);
`;

const BoardContainer = styled.div`
height:90%;
width:80%;
margin-left:10%;
background-color:darkblue;
border-radius:10px;
`;

const DetailContainer = styled.div`
height:50%;
width:50%;
/* background-color: #fff; */
margin:0px;
`;

const WeekContainer = styled.div`
height:50%;
width:102%;
margin-left:-1%;
margin-top:-5%;
background-color: #fff;
border-radius:10px;
`;

