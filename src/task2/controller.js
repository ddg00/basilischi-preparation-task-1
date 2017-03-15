const url = "http://jsonplaceholder.typicode.com/";

const crud = {

  create(val){
    var data = {
      title: 'Crud Test',
      body: val,
      userId: 1
    }
    return requestData('POST', '', data);
  },

  get(){
    return fetch(url+'posts?userId=1')
    .then((res) => {return res.json()})
    .then((resData) => {
      return resData;
    })
    .catch((error) => {
      console.log(error);
    })
  },

  getById(id){
    return fetch(url+'posts?userId=1&id='+id)
    .then((res) => {return res.json()})
    .then((resData) => {
      return resData;
    })
    .catch((error) => {
      console.log(error);
    })
  },

  update(val){
    var data = {
      body: val
    }
    return requestData('PATCH','1',data);
  },

  delete(){
    return requestData('DELETE');
  },
}

export default crud ;
