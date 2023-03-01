const express = require("express")
const api = require("./controllers/api")

const apiRouter = new express.Router()

apiRouter.get('/ping', api.ping)
apiRouter.get('/blogs', api.getBlogs)
apiRouter.post('/blogs', api.createBlogs)
apiRouter.get('/blogs/:id', api.getSingleBlog)
apiRouter.get('/projects', api.getProjects)
apiRouter.get('/projects/:id', api.getSingleProject)
apiRouter.get('/featured', api.getFeatured)
apiRouter.get('/files/:filename', api.downloadFiles)
apiRouter.get('/logs', api.getLogs)

module.exports = {
  apiRouter,

}
