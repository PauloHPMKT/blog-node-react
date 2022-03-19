const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, '/client-blog')))

app.get('/', (req, res) => {
    res.send('rendering')
})

const routes = require('./routes')
app.use('/api', routes)


const port = process.env.port || 3001
app.listen(port, () => console.log('running server on http://localhost:', port))