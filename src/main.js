import React, { Component } from 'react';
import {
  Text,
  Image,
  View
} from 'react-native';
import Task1 from './task1/index';

// line 16 <Image source={require('./img/'+peserta.image)} /> not working

class App extends Component {
  render() {
    return (
      <Task1 />
    );
  }
}


export default App;
