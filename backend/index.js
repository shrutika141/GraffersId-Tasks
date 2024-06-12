const express = require('express');

const app = express()
const port = process.env.PORT || 3033;

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use(express.static('public'))

const routes = require('./routes/index')
app.use('/', routes)

app.listen(port, () => {
    console.log(`server is listening on ${port}`)
})