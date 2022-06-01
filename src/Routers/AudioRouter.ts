const express = require('express')
const router = express.Router()
const AudioController = require('../Controllers/AudioController')

router.get('/', AudioController.get)

module.exports = router