import { createServer } from 'http'

import config from './config.js'
const { port: PORT } = config

import app from './express.js'

// set up server
const server = createServer(app)

// start server
server.listen(PORT)

server.on('listening', () => {
    console.log(`Server listening on port ${PORT}`)
})