const express = require("express")
const api = require("./controllers/api")

const apiRouter = new express.Router()

apiRouter.get('/ping', api.ping)
apiRouter.get('/blogs', api.getBlogs)
apiRouter.post('/blogs', api.createBlogs)

module.exports = {
  apiRouter,

}
