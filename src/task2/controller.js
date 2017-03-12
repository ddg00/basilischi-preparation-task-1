var crud = {

  create(val){
    var data = {
      title: 'Crud Test',
      body: val,
      userId: 1
    }
    return requestData('POST', '', data);
  },

  getAll(){
    let data = {};
    fetch('http://jsonplaceholder.typicode.com/posts/')
    .then((res) => {return res.json()})
    .then((resData) => {
      console.log(resdata);
      data = resData;
    })
    .catch(function(error) {
      console.log(error);
    });
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

export { crud };
