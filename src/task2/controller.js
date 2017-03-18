const url = "http://jsonplaceholder.typicode.com/";

const crud = {
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

  create(val){
    return fetch(url+'posts/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
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

  delete(id){
    return fetch(url+'posts/'+id, {
      method: 'DELETE',
    })
    .then((res) => {return res.json()})
    .then((resData) => {
      console.log('Delete Response');
      console.log(resData);
      return resData;
    })
    .catch((error) => {
      console.log(error);
    })
  },
}

export default crud ;
