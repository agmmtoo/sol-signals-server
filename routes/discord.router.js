import { Router } from 'express'

// import controller
import discordController from '../controllers/discord.controller.js'

const router = Router()

router.route('/')
    .get(discordController.base)

export default router