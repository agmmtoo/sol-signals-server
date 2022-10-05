async function base(req, res) {
    try {
        const { query } = req
        console.log(query)
        return res.status(200).json({ query })
    } catch (error) {
        return res.status(500).json({ status: 'error', message: error.message })
    }
}

export default { base }