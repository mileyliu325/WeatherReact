// f2dbda67de814bf8bf895350192301
import React, { Component } from "react";
// import logo from './logo.svg';

import "../bootstrap.css";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import WeatherDetail from "../components/WeatherDetail";
import WeatherWeek from "../components/WeatherWeek";

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

class Dashboard extends Component {
  constructor() {
    super();
    this.state = { data: null };
  }
  fetchData = async () => {
    axios
      .get(
        "https://api.apixu.com/v1/forecast.json?key=f2dbda67de814bf8bf895350192301&q=Sydney&days=5"
      )
      .then(res => {
        const data = res.data;
        // console.log(data);
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
      <div>
        <BackgroundContainer className="row">
          <BoardContainer className="col-sm-10 col-md-10 col-lg-10 align-self-center">

          <TopContainer>

          <DetailContainer>
              {data && data.current && (
                <WeatherDetail
                  temp={data.current.temp_c}
                  humidity={data.current.humidity}
                  wind={data.current.wind_mph}
                  condition={data.current.condition.text}
                />
              )}
            </DetailContainer>

            <CityContainer>

                <h1>Sydney</h1>


            </CityContainer>

            
          
          </TopContainer>
           

            <BottomContainer>
              <TweetContainer />

              <WeekContainer>
                {data &&
                  data.forecast.forecastday.map((day, id) => (
                    <div className="align-self-center" key={id}>
                      <h4 className="card-title">{day.date}</h4>

                      <img src={day.day.condition.icon} alt={day.date} />
                      <h5 className="card-subtitle">{day.day.avgtemp_c} °C </h5>
                      <h6 className="card-subtitle">
                        {day.day.condition.text}
                      </h6>
                    </div>
                  ))}
              </WeekContainer>
            </BottomContainer>
          </BoardContainer>
        </BackgroundContainer>
      </div>
    );
  }
}

export default Dashboard;

const BackgroundContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(66deg, deeppink, purple, blue);
`;

const BoardContainer = styled.div`
  height: 90%;
  width: 80%;
  margin-left: 10%;
  background-color: darkblue;
  border-radius: 10px;
  display:flex;
  flex-direction:column;
`;

const TopContainer = styled.div`
   /* height: 50%; */
   width: 100%;
   display:flex;
   flex-direction:row;

`;
const DetailContainer = styled.div`
  display:flex;
`;
const CityContainer = styled.div`
    display:flex;
    background-color:red;
`;

const BottomContainer = styled.div`
  /* height: 50%; */
  width: 102%;
  margin-left: -1%;
  margin-top: -5%;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
`;

const TweetContainer = styled.div`
  height: 100%;
  width: 40%;
  background-color: #ff6;
`;

const WeekContainer = styled.div`
  height: 50%;
  width: 60%;
  margin-top: 5%;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  padding: 5px;
`;
