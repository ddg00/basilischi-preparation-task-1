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

class Task2View extends Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      postId: this.props.postId,
      dataSource: ds.cloneWithRows([{}]),
    };

    crud.getById(this.state.postId).then((list) => {
      this.setState({ dataSource: ds.cloneWithRows(list) });
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
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => (
            <View style={styles.postContainer}>
               <Text style={styles.postTitle}>{rowData.title}</Text>
               <Text style={styles.postBody}>{rowData.body}</Text>
            </View>
          )}
        />
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
              id: 'task2Page',
              name: 'task2',
            })
          }>
        <Text style={{color: 'white', margin: 10,}}>
          All Post
        </Text>
      </TouchableOpacity>
    );
  },

  RightButton(route, navigator, index, navState) {
    return (
      <TouchableOpacity
          onPress={() =>
            navigator.parentNavigator.push({
              id: 'task2Edit',
              name: 'Edit Post',
            })
          }>
        <Text style={{color: 'white', margin: 10,}}>
          Edit
        </Text>
      </TouchableOpacity>
    );
  },

  Title(route, navigator, index, navState) {
    return (
        <Text style={{color:'white', margin: 10, fontSize: 16, textAlign: 'center', fontWeight: 'bold'}}>
          Post
        </Text>
    );
  }
}

export default Task2View;
