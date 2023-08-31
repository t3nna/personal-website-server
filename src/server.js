const express = require("express");
const { PORT } = require("./config");
const { apiRouter } = require("./routers");
const { NotFoundApiError } = require("./validators/errors/ApiError");
const errorHandler = require("./validators/middlewares/errorHandler");
const useMiddlewares = require("./middlewares");
const http = require("http");
const upgradeWs = require("./ws");
const mongoose = require("mongoose");

const app = express();


//middlewares

useMiddlewares(app);

//api routes

app.use("/api", apiRouter);

// error Handlers
app.use((req, res, next) => {
  const err = new NotFoundApiError("Page not found. Try to use correct url");
  next(err);
});

app.use(errorHandler);

const server = http.createServer(app);

upgradeWs(server);

// server.listen(PORT, ()=>{
//   console.log(`Server is running on port ${PORT}`);
// })
(async () => {
  try {
    await mongoose.connect(
      "mongodb://127.0.0.1:27017/personal-website"
    );
    server.listen(PORT, () => {
      console.log(`Server Started on port ${PORT}`);
    });
  } catch (e) {
    console.error(e);
  }
})();


// TODO: Replace json with mongo



