import axios from 'axios'
import qs from 'qs'

import config from '../config.js'

export default async function getDiscordToken({ code, state }) {

    const qsdata = {
        client_id: config.discord.client_id,
        client_secret: config.discord.client_secret,
        grant_type: 'authorization_code',
        code,
        redirect_uri: config.discord.redirect_uri,
    }

    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
    }

    const options = {
        method: 'POST',
        headers,
        data: qs.stringify(qsdata),
        url: config.discord.tokenURL,
    }

    const res = await axios(options)

    return res.data
}