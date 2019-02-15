import React, { Component } from "react";
import "../bootstrap.css";
import styled from "styled-components";
import axios from "axios";

import WeatherDetail from "../components/WeatherDetail";
import WeatherWeek from "../components/WeatherWeek";

const HOST = "https://api.apixu.com/v1/forecast.json";
const KEY = "f2dbda67de814bf8bf895350192301";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = { data: null };
  }
  fetchData = async () => {
    var city = "Sydney";
    axios
      .get(HOST + "?key=" + KEY + "&q=" + city + "&days=5")
      .then(res => {
        const data = res.data;

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
        <BackgroundContainer>
          <BoardContainer>
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
                    <WeatherWeek
                      key={id}
                      date={day.date}
                      icon={day.day.condition.icon}
                      temp={day.day.avgtemp_c}
                      sum={day.day.condition.text}
                    />
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
  height: 100%;
  background-image: linear-gradient(66deg, deeppink, purple, blue);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BoardContainer = styled.div`
  height: 90%;
  width: 80%;
  background-color: darkblue;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;
//todo fix the % issues

const TopContainer = styled.div`
  height: 55%;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex: 1;
`;

const BottomContainer = styled.div`
  height: 50%;
  width: 100%;
  margin-top: -5%;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  flex: 1;
`;

const DetailContainer = styled.div`
  display: flex;
`;
const CityContainer = styled.div`
  margin-top:10%;
  display: flex;
  /* align-items:flex-start; */
  justify-content:center;
  color: #fff;
  text-decoration:underline;
`;

const TweetContainer = styled.div`
  height: 100%;
  flex: 2;
`;

const WeekContainer = styled.div`
  height: 100%;
  flex: 3;
  display: flex;
  flex-direction: row;
`;
