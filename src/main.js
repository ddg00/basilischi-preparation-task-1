import React, { Component } from 'react';
import {
  Navigator,
  Text
} from 'react-native';
import Task1 from './task1/index';
import Task2 from './task2/index';
import Task2View from './task2/view';

class App extends Component {
  render() {
    return (
      <Navigator
          initialRoute={{id: 'task2Page', name: 'Task1'}}
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
    if (routeId === 'task2Page') {
      return <Task2
          navigator={navigator} />;
    }
    if (routeId === 'task2View') {
      return <Task2View
          navigator={navigator} />;
    }
  }
}


export default App;
