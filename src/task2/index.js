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
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([{}]),
    };

    this.getData().then((list) => {
      this.setState({ dataSource: ds.cloneWithRows(list) });
    });
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

    return (
       <View style={styles.container2}>
         <ListView
           dataSource={this.state.dataSource}
           renderRow={(rowData) => (
             <View style={styles.listContainer}>
                <Text style={styles.listTitle}>{rowData.id}</Text>
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
