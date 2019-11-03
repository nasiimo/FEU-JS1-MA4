fetch("https://jsonplaceholder.typicode.com/todos")
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      console.log(data);
    });
