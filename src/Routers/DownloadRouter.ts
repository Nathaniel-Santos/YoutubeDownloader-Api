const express = require('express')
const router = express.Router()
const DownloadController = require('../Controllers/DownloadController')

router.get('/', DownloadController.get)

module.exports = router