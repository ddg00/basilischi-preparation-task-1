import React, { Component } from 'react';
import {
  Text,
  View,
  ListView,
  TextInput,
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
      postTitle: '',
      postBody: '',
    };

    postId = this.state.postId;
    crud.getById(this.state.postId).then((list) => {
      const data = list[0];
      this.setState({postTitle: data.title});
      this.setState({postBody: data.body});
    });
  }

  _onPressSave(){
    let val = {
      id: this.state.postId,
      title: this.state.postTitle,
      body: this.state.postBody
    }
    crud.update(val).then((res) => {
      const data = res;
      Alert.alert(
        'Update Response',
        '{ userId: '+data.userId+', id: '+data.id+', title: "'+data.title+'", body: "'+data.body+'" }'
      );
    });
  }

  renderScene(route, navigator) {
    return (
      <View style={styles.container2}>
            <View style={styles.editContainer}>
               <Text style={styles.editLabel}>Title</Text>
               <TextInput
                  style={styles.editFormTitle}
                  numberOfLines={2}
                  onChangeText={(text) => this.setState({postTitle: text})}
                  value={this.state.postTitle}
                  multiline={true}
               />
               <Text style={styles.editLabel}>Content</Text>
               <TextInput
                  style={styles.editFormBody}
                  numberOfLines={5}
                  onChangeText={(text) => this.setState({postBody: text})}
                  value={this.state.postBody}
                  multiline={true}
               />
               <Button onPress={() => this._onPressSave()} title="Save" color="#841584" />
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

let postId = '';

const NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    return (
      <TouchableOpacity
          onPress={() =>
            navigator.parentNavigator.push({
              id: 'task2View',
              name: 'Post ID:'+postId,
              postId: ''+postId,
            })
          }>
        <Text style={{color: 'white', margin: 10,}}>
          Back
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
          Edit Post ID: {postId}
        </Text>
    );
  }
}

export default Task2View;
