const express = require('express')
const router = express.Router()
const VideoController = require('../Controllers/VideoController')

router.get('/', VideoController.get)

module.exports = router