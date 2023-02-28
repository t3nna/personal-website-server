const ping = require("./ping")
const getBlogs = require("./getBlogs")
const createBlogs = require("./createBlogs")
const getSingleBlog = require("./getSingleBlog")
const getProjects = require("./getProjects")
const getSingleProject = require("./getSingleProject")
const getFeatured = require("./getFeatured")
const downloadFiles = require("./downloadFiles")

module.exports = {
  ping,
  getBlogs,
  getSingleBlog,
  createBlogs,
  getProjects,
  getSingleProject,
  getFeatured,
  downloadFiles
}
