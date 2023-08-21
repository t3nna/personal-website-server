const express = require("express")
const { PORT } = require("./config");
const { apiRouter } = require("./routers");
const { NotFoundApiError } = require("./validators/errors/ApiError");
const errorHandler = require('./validators/middlewares/errorHandler')
const useMiddlewares = require('./middlewares')
const http = require("http");
const upgradeWs = require("./ws");

const app = express()


//middlewares

useMiddlewares(app)

//api routes

app.use('/api', apiRouter)

// error Handlers
app.use((req,res, next) =>{
  const err = new NotFoundApiError('Page not found. Try to use correct url')
  next(err)
})

app.use(errorHandler)

const server = http.createServer(app)

upgradeWs(server)

server.listen(PORT, ()=>{
  console.log(`Server is running on port ${PORT}`);
})


// TODO: Replace json with mongo



