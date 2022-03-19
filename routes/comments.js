const express = require('express')
const router = express.Router()

router.get('/comments/:postid', (req, res) => {
    res.json({
        content: 'conteudo muito bacana',
        author: 'desconhecido'
    })
})


module.exports = router