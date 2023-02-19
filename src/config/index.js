const path = require("path")

const dbFolder = path.resolve(__dirname, "../../db")
const blogsFile = path.resolve(dbFolder, 'blog/test.json')

module.exports = {
  PORT: 3000,
  dbFolder,
  blogsFile
}

