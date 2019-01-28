import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import Axios from 'axios';



class App extends Component {
  render() {
    return (
      <div >

      <MyContainer>

      
       <Button variant="contained" color="primary">
       Hello World
      </Button>
      </MyContainer>
     
      </div>
    );
  }
}

export default App;

const MyContainer = styled.div`
 width:100%;
 height:100%;
  /* background-color: coral; */
  background-image: linear-gradient(45deg, #7A88FF, #7AFFAF);
`;



