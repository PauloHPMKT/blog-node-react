const express = require('express')
const router = express.Router()

router.get('/posts', (req, res) => {
    res.json({
        title: 'meu primeiro post',
        content: 'criando blog com node e react',
        author: 'Paulo Sérgio'
    })
})


module.exports = router