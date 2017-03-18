import React, { Component } from 'react';
import {
  Text,
  View,
  ListView,
  Navigator,
  Button,
  Alert,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';
import styles from '../style';
import crud from './controller';

class Task2View extends Component {

  constructor(props) {
    super(props);
    this.state = {
      postId: this.props.postId,
      dataSource: {},
    };
    postId = this.state.postId;
    crud.getById(this.state.postId).then((list) => {
      this.setState({ dataSource: list[0] });
    });
  }

  _onPressEdit(navigator){
    navigator.parentNavigator.push({
      id: 'task2Edit',
      name: 'Edit Post',
      postId: this.state.postId,
    })
  }

  _onPressDelete(){
    Alert.alert(
      'Attention',
      'Are you sure to delete this Post',
      [
        {
          text: 'Delete',
          onPress: () => {
            crud.delete(this.state.postId).then(()=>{
              Alert.alert(
                'Attention',
                'Post Deleted !',
              )
            });
          }
        },
        {
          text: 'Cancel',
          style: 'cancel'
        },
      ]);
  }

  renderScene(route, navigator) {
    return (
      <View style={styles.container2}>
        <View style={styles.postContainer}>
           <Text style={styles.postTitle}>{this.state.dataSource.title}</Text>
           <Text style={styles.postBody}>{this.state.dataSource.body}</Text>
        </View>
        <View style={styles.buttonContainer} >
          <View style={styles.editButtonContainer} >
            <Button onPress={() => this._onPressEdit(navigator)} title="Edit" color='#7B68EE' style={styles.editButton}/>
          </View>
          <View style={styles.deleteButtonContainer} >
            <Button onPress={() => this._onPressDelete()} title="Delete" color="#FF4500" />
          </View>
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

const NavigationBarRouteMapper = {
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
    return null;
  },

  Title(route, navigator, index, navState) {
    return (
        <Text style={{color:'white', margin: 10, fontSize: 16, textAlign: 'center', fontWeight: 'bold'}}>
          Post ID: {postId}
        </Text>
    );
  }
}

export default Task2View;
