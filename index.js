import { createServer } from 'http'

import 'dotenv/config'

import app from './express.js'

const PORT = process.env.PORT || 3000

// set up server
const server = createServer(app)

// start server
server.listen(PORT)

server.on('listening', () => {
    console.log(`Server listening on port ${PORT}`)
})