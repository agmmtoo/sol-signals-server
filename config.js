import { URL } from 'url'
import 'dotenv/config'

const __dirname = new URL('.', import.meta.url).pathname

export default {
    name: process.env.NAME,
    host: process.env.HOST,
    port: process.env.PORT,
    env: process.env.NODE_ENV,
    basedir: __dirname,

    // discord credentials
    discord: {
        client_id: process.env.DISCORD_CLIENT_ID,
        client_secret: process.env.DISCORD_CLIENT_SECRET,
        tokenURL: process.env.DISCORD_TOKEN_URL,
        tokenRevokeURL: process.env.DISCORD_TOKEN_REVOCATION_URL
    }
}