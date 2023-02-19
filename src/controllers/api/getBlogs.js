const path = require("path");
const {  blogsFile } = require("../../config");
module.exports=(req, res, next) =>{
  const text = require(blogsFile)

  return res.send(text)
}
