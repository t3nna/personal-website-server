const path = require("path")

const dbFolder = path.resolve(__dirname, "../../db")
const blogsFile = path.resolve(dbFolder, 'blog/test.json')
const projectsFile = path.resolve(dbFolder, 'projects/projects.json')
const featuredFile = path.resolve(dbFolder, 'featured/featured.json')

console.log(projectsFile);

module.exports = {
  PORT: 3000,
  dbFolder,
  blogsFile,
  projectsFile,
  featuredFile
}

