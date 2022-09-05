 const http = require('http')
 const port = 3000

 
 function factorialize(num) {
    if (num === 0 || num === 1)
      return 1;
    for (var i = num - 1; i >= 1; i--) {
      num *= i;
    }
    return num;
  }

const myURL = new URL('http://localhost:3000/5');

var pathname = myURL.pathname.split('/');
console.log(myURL.pathname.split('/'));
console.log(globeThis.pathname);
s = parseInt(pathname);
var m = globeThis.pathname;


const server = http.createServer(function(req, res) {
    res.write( m +' ')
    res.end()
})

server.listen(port, function(error){
if (error) {
    console.log('Something went wrong', error)
} else {
    console.log('Server is listening on port ' + port)
}
}) 



  
