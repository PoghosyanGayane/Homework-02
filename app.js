const express = require('express');

function factorialize(num) {
    var result = num;
    if (num === 0 || num === 1) 
      return 1; 
    while (num > 1) { 
      num--;
      result = result * num;
  }
  return result;
}

const app = express();

app.get('/', function (req, res){
  res.send('Hello world')
});

app.get('/:id', function (req, res){
  const id = req.params.id;
  var s;
  s= factorialize(id)
  res.send(' '+ s)
});

app.listen(7000, function (req, res ){
  console.log('Running...')
});