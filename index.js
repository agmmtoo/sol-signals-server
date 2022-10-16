import { createServer } from 'http'

import config from './config.js'
const { port } = config

import app from './express.js'

// set up server
const server = createServer(app)

// start server
server.listen(port)

server.on('listening', () => {
    console.log(`Server listening on port ${port}`)
})
