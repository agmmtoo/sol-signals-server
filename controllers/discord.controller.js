import path from 'path'
import axios from 'axios'
// import url from 'url'
import qs from 'qs'

import config from '../config.js'

async function base(req, res) {
    const tokenURL = 'https://discord.com/api/oauth2/token'
    const tokenRevocationURL = 'https://discord.com/api/oauth2/token/revoke'

    try {
        const { query } = req
        const { code, state } = query

        // const params = new url.URLSearchParams({
        //     client_id: config.discord.client_id,
        //     client_secret: config.discord.client_secret,
        //     grant_type: 'authorization_code',
        //     code,
        //     redirect_uri: 'http://localhost:3001/',
        // })
        const qsdata = {
            client_id: config.discord.client_id,
            client_secret: config.discord.client_secret,
            grant_type: 'authorization_code',
            code,
            redirect_uri: 'http://localhost:3001/',
        }

        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        }

        const options = {
            method: 'POST',
            headers,
            data: qs.stringify(qsdata),
            url: tokenURL,
        }

        // const data = await axios.post(tokenURL, params.toString(), { headers })
        const data = await axios(options)
        console.log('here', data)

        // res.sendFile(path.join(config.basedir, 'auth', 'index.html'))
        res.status(200).json({ success: true, res: data })

    } catch (error) {
        return res.status(500).json({ status: 'error', error })
    }
}

export default { base }