function requestData(req, filter, data){
  var request = {};
  request.method = req;
  request.headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
  if (data){
    request.body = JSON.stringify(data);
  }

  fetch('http://jsonplaceholder.typicode.com/posts/'+filter, request )
  .then((resp) => resp.json())
  .then(function(data) {
    let res = {};
    res.title = data.title;
    res.body = data.body;
    console.log(res);
    return res;
  })
  .catch(function(error) {
    console.log(error);
  });;
}

var crud = {

  create(val){
    var data = {
      title: 'Crud Test',
      body: val,
      userId: 1
    }
    return requestData('POST', '', data);
  },

  read(){
    return requestData('GET', '1');
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
