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
import crud from './controller';

class Task2 extends Component {

  request(req, data){
    let request = {};
    request.method = req;
    request.headers = {
      Accept: 'application/json',
      ContentType: 'application/json'
    }
    if (data){
      request.body = JSON.stringify(data);
    }

    return request;
  }

  getData(){
    return fetch('http://jsonplaceholder.typicode.com/posts?userId=1')
    .then((res) => {return res.json()})
    .then((resData) => {
      return resData;
    })
    .catch((error) => {
      console.log(error);
    })
  }

  renderScene(route, navigator) {
    this.getData().then((list) => {

      const contents = list.map((data) => {
          return (
            <View key={data.id} style={ styles.row }>
              <Text style={styles.listTitle}>{data.title}</Text>
            </View>
          );
       });
       console.log(contents);
       return (
          <View style={styles.container2}>
             { contents }
          </View>
        );
    });


    // const contents = this.getData().map((data) => {
    //     return (
    //       <View key={data.id} style={ styles.row }>
    //         <Text>{data.title}</Text>
    //       </View>
    //     );
    //  });
    //
    //  return (
    //    <View style={styles.container2}>
    //       { contents }
    //    </View>
    //  );
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
