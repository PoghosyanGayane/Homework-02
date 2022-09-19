 const http = require('http');
 const port = 3000;
 const url = require('url');
 
 function factorialize(num) {
    if (num === 0 || num === 1)
      return 1;
    for (var i = num - 1; i >= 1; i--) {
      num *= i;
    }
    return num;
  }

const server = http.createServer(function(req, res) {
  const p = url.parse(req.url).pathname.split('/');
    s = parseInt(p[1]);
    var m = factorialize(s);
    res.write( m +' ');
    res.end();
})

server.listen(port, function(error){
if (error) {
    console.log('Something went wrong', error)
} else {
    console.log('Server is listening on port ' + port)
}
}) 



  