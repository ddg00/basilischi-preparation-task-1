import {StyleSheet} from 'react-native';

var Styles = StyleSheet.create({
  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  container2: {
    flex:1,
    marginTop: 65,
    padding: 5,
    backgroundColor: '#F5FCFF',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
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
    borderBottomWidth: 2,
    borderColor: 'gray',
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
  postContainer:{
    padding: 5,
  },
  postTitle:{
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  postBody:{
    marginTop: 20,
    marginBottom:50,
    fontSize: 16,
    textAlign: 'left',
    fontWeight: '300',
  },
  editButtonContainer:{
    padding: 5,
  },
  deleteButtonContainer:{
    padding: 5,
  },
  buttonContainer:{
    flexDirection: 'column',
  },
  editContainer:{
    padding: 10,
  },
  formLabel:{
    fontSize: 20,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  formTitle:{
    fontWeight: '300',
    textAlignVertical: 'top',
    marginBottom:10,
    fontSize: 15,
  },
  formBody:{
    borderColor: 'gray',
    textAlignVertical: 'top',
    fontWeight: '300',
    fontSize: 15,
  }
});

export default Styles;
