import React, { Component } from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';
import styles from './style';
import peserta from './peserta';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.batch}>
          {peserta.batch}
        </Text>
        <Text style={styles.name}>
          {peserta.name}
        </Text>
      </View>
    );
  }
}


export default App;
