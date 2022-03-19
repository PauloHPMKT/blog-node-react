const express = require('express')
const router = require('express').Router()


router.use('/', require('./posts'))
router.use('/', require('./comments'))

module.exports = router