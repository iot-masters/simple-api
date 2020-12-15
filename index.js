const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    let value = req.query.value;
    res.send('sensor value = ' + value )
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})