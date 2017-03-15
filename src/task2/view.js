import React, { Component } from 'react';
import {
  Text,
  View,
  ListView,
  TextInput,
  Navigator,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';
import styles from '../style';
import crud from './controller';

class Task2 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: {},
    };

    crud.getById(route.postId).then((data) => {
      this.setState({ dataSource: data });
    });
  }

  _onPressButton(id){
    this.props.navigator.push({
      id: 'task2View',
      name: 'Post ID:'+id,
      postId: id,
    })
  }

  renderScene(route, navigator) {
    return (
       <View style={styles.container2}>
             <View style={styles.listContainer}>
                <Text style={styles.listId}>Id: {rowData.id}</Text>
                <Text style={styles.listTitle}>Title: {rowData.title}</Text>
             </View>
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
