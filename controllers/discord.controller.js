// service to request discord token
import getDiscordToken from '../services/authService.js'

async function base(req, res) {

    // try {
        const { query } = req
        const { code, state } = query

        const data = await getDiscordToken({ code, state })

        // res.sendFile(path.join(config.basedir, 'auth', 'index.html'))
        res.status(200).json({ success: true, res: data })

    // } catch (error) {
    //     return res.status(500).json({ status: 'error', error })
    // }
}

export default { base }