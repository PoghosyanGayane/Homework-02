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

var m = factorialize(5);


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
