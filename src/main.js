import React, { Component } from 'react';
import {
  Navigator,
  Text
} from 'react-native';
import Task1 from './task1/index';
import Task2 from './task2/index';
import Task2View from './task2/view';
import Task2Edit from './task2/edit';

class App extends Component {
  render() {
    return (
      <Navigator
          initialRoute={{id: 'task2Page', name: 'Task1', postId: ''}}
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
          navigator={navigator} postId={route.postId} />;
    }
    if (routeId === 'task2View') {
      return <Task2View
          navigator={navigator} postId={route.postId}/>;
    }
    if (routeId === 'task2Edit') {
      return <Task2Edit
          navigator={navigator} postId={route.postId}/>;
    }
    return <Task1 navigator={navigator} />;
  }
}


export default App;
