console.log("hello from nodejs!");
const express = require('express')
const app = express()

const PORT = 5000

app.get('/', (req, res) => {
    res.send('No matter what...')
})

app.get('/admin', (req, res) => {
    res.send('The secret Admin Dashboard')
})

app.listen(PORT, () => console.log('listening on port', PORT))