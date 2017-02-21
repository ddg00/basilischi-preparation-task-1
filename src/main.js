import React, { Component } from 'react';
import {
  Navigator,
  Text
} from 'react-native';
import Task1 from './task1/index';

class App extends Component {
  render() {
    return (
      <Navigator
          initialRoute={{id: 'task1Page', name: 'Task1'}}
          renderScene={this.renderScene.bind(this)}
          configureScene={(route) => {
            if (route.sceneConfig) {
              return route.sceneConfig;
            }
            return Navigator.SceneConfigs.FloatFromRight;
          }}
      />
    );
  }

  renderScene(route, navigator) {
    var routeId = route.id;
    if (routeId === 'task1Page') {
      return <Task1
          navigator={navigator} />;
    }
    return <Task1 navigator={navigator} />;
  }
}


export default App;
