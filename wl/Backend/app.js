const express = require('express')
const app = express()

const events = {
    listen: require('./events/listen')
}

const routes = {
    check: require('./routes/check')
}

app.get('/check',routes.check)

app.listen(events.listen.Port,events.listen.Event)