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
    return fetch(url+'posts/'+val.id, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: val.id,
        title: val.title,
        body: val.body,
        userId: 1
      })
    })
    .then((res) => {return res.json()})
    .then((resData) => {
      console.log('Update Response');
      console.log(resData);
      return resData;
    })
    .catch((error) => {
      console.log(error);
    })
  },

  delete(){
    return requestData('DELETE');
  },
}

export default crud ;
