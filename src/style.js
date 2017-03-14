import {StyleSheet} from 'react-native';

var Styles = StyleSheet.create({
  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  container2: {
    flex:0,
    marginTop: 75,
    backgroundColor: '#F5FCFF',
  },
  name: {
    fontSize: 28,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  batch: {
    fontSize: 22,
    textAlign: 'center',
    margin:5,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  say: {
    fontSize: 18,
    textAlign: 'center',
    margin:5,
  },
  listContainer:{
    padding: 5,
    borderBottomWidth: 1,
  },
  listId:{
    fontSize: 15,
    textAlign: 'left',
  },
  listTitle:{
    fontSize: 20,
    textAlign: 'left',
    fontWeight: '400',
  },
});

export default Styles;
