const express = require("express")
const path = require("path")

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '2e20cff43db244f48ab08bf32fa2bb08',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

const app = express()

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
})

app.use(express.static(path.join(__dirname, "../public")))

const port = process.env.PORT || 4545

app.listen(port, () => console.log(`Online - ${port}`))
