// service to request discord token
import getDiscordToken from '../services/authService.js'

async function base(req, res) {

    try {
        const { query } = req
        const { code, state } = query

        // get discord token
        const data = await getDiscordToken({ code, state })
        // do smth with data
        // store data in db or smth
        // check if user is already authenticated
        res.status(200).json({ success: true, res: data })

    } catch (error) {
        return res.status(500).json({ status: 'error', error })
    }
}

export default { base }