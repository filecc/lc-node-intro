require('dotenv').config()
const http = require('http')
const port = process.env.PORT || 8080
const host = process.env.HOST || 'localhost'


const server = http.createServer((req, res) => {
   
    res.end('<h1>Hello World!</h1>')
}).listen(port, host, () => {
    console.log('Server started on: ' + 'http://'+ host +':'+ port);
});