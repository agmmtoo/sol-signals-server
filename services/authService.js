import axios from 'axios'
// import qs from 'qs'
import FormData from 'form-data'

import config from '../config.js'

// const params = new url.URLSearchParams({
//     client_id: config.discord.client_id,
//     client_secret: config.discord.client_secret,
//     grant_type: 'authorization_code',
//     code,
//     redirect_uri: 'http://localhost:3001/',
// })

export default async function getDiscordToken({ code, state }) {

    // const qsdata = {
    //     client_id: config.discord.client_id,
    //     client_secret: config.discord.client_secret,
    //     grant_type: 'authorization_code',
    //     code,
    //     redirect_uri: 'http://localhost:3001/',
    // }

    const form = new FormData()
    form.append('client_id', config.discord.client_id)
    form.append('client_secret', config.discord.client_secret)
    form.append('grant_type', 'authorization_code')
    form.append('code', code)
    form.append('redirect_uri', 'http://localhost:3001/auth/discord')

    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
    }

    const options = {
        method: 'POST',
        headers,
        // data: qs.stringify(qsdata),
        data: form,
        url: config.discord.tokenURL,
    }

    // const data = await axios.post(tokenURL, params.toString(), { headers })
    const res = await axios(options)
    // debug
    console.log('axios token request result: ', res)

    return res.data
}