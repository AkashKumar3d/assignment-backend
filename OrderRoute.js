const express = require('express')
const {postInData, getInData } = require('./OrderController')
// const multer = require('multer')
// const path = require('path')

const router = express.Router()


router.route('/post/indata').post(postInData)
router.route('/get/indata').get(getInData)


module.exports = router