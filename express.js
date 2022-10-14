import express from 'express'
import logger from 'morgan'
import cors from 'cors'
import helmet from 'helmet'
import compression from 'compression'
import path from 'path'

// config
import config from './config.js'

// import routes
import discordRouter from './routes/discord.router.js'

const app = express()

app.use(express.json())
// parse URL-encoded data with querystring library
app.use(express.urlencoded({ extended: false }))
app.use(logger('dev'))
app.use(cors())
// app.use(helmet())
app.use(compression())


// register routes
// redirect url for discord auth
app.use('/auth/discord', discordRouter)

// static files
// app.use(express.static(path.join(config.basedir, 'public')))

// fallback route
app.use('*', (req, res) => {
    res.status(404).json({
        status: 'error',
    })
})

export default app