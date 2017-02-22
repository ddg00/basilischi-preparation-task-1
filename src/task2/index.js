import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  Navigator,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';
import styles from '../style';

class Task2 extends Component {
  constructor(props) {
    super(props);
    this.state = {sayText: ''};
  }

  renderScene(route, navigator) {
    return (
      <View style={styles.container2}>
        <Text style={styles.title}>
          Write Something !!
        </Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1, alignSelf: 'stretch', textAlign: 'center', padding: 5}}
          onChangeText={(text) => this.setState({sayText: text})}
        />
        <Text style={styles.say}>
          {this.state.sayText}
        </Text>
      </View>
    );
  }

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
}

var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    return (
      <TouchableOpacity
          onPress={() =>
            navigator.parentNavigator.push({
              id: 'task1Page',
              name: 'task1',
            })
          }>
        <Text style={{color: 'white', margin: 10,}}>
          Task 1
        </Text>
      </TouchableOpacity>
    );
  },

  RightButton(route, navigator, index, navState) {
    return null;
  },

  Title(route, navigator, index, navState) {
    return (
        <Text style={{color:'white', margin: 10, fontSize: 16, textAlign: 'center', fontWeight: 'bold'}}>
          Task 2
        </Text>
    );
  }
}

export default Task2;
