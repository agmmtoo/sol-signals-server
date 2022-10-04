async function base(req, res) {
    try {
        return res.status(200).json({ message: 'You are at base discord controller!' })
    } catch (error) {
        return res.status(500).json({ status: 'error', message: error.message })
    }
}

export default { base }