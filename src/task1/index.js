import React, { Component } from 'react';
import {
  Text,
  Image,
  View,
  Navigator,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';
import styles from '../style';
import peserta from './peserta';

// line 16 <Image source={require('./img/'+peserta.image)} /> not working

class Task1 extends Component {
  render() {
    return (
      <Navigator
          renderScene={this.renderScene.bind(this)}
          navigator={this.props.navigator}
          navigationBar={
            <Navigator.NavigationBar
              style={{backgroundColor: '#778899'}}
              navigationStyles={Navigator.NavigationBar.StylesIOS}
              routeMapper={NavigationBarRouteMapper} />
          } />
    );
  }

  renderScene(route, navigator) {
    return (
      <View style={styles.container1}>
        <Image source={require('../img/profile_image.png')} />
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

var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    return null
  },

  RightButton(route, navigator, index, navState) {
    return (
      <TouchableOpacity
          onPress={() =>
            navigator.parentNavigator.push({
              id: 'task2Page',
              name: 'task2',
            })
          }>
        <Text style={{color: 'white', margin: 10,}}>
          Task 2
        </Text>
      </TouchableOpacity>
    );
  },

  Title(route, navigator, index, navState) {
    return (
        <Text style={{color:'white', margin: 10, fontSize: 16, textAlign: 'center', fontWeight: 'bold'}}>
          Task 1
        </Text>
    );
  }
}

export default Task1;
