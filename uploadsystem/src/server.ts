import http from 'http'

const server = http.createServer((request, response) => {
    if (request.url === '/') {
        response.write('Hello World')

        response.end()
    }

})

server.listen(8090 || process.env.PORT, () => console.log('Server running'))