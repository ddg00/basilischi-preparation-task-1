import React, { Component } from 'react';
import {
  Text,
  Image,
  View
} from 'react-native';
import styles from './style';
import peserta from './peserta';

// line 16 <Image source={require('./img/'+peserta.image)} /> not working

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./img/profile_image_arya.png')} />
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
