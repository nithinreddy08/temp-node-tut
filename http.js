//const { write } = require('fs');
const http = require('http')

const server = http.createServer((req,res)=>{

    if(req.url === '/'){
        return res.end('Welcome to page')
    }
    if(req.url === '/about'){
        return res.end('Here is the history')
    }
    res.writeHead(404, {'content-Type': 'text/plain'})
    res.end(`
        <h1>Oops!</h1>
        <p>We don't find the page</p>
        <a href="/">back home </a>
    `)
  res.write()
  res.end()
})

server.listen(2300 ,()=> {
    console.log('Server listing on port 2300')
})