const { getAllProjects } = require("../../services");

module.exports = async (req, res, next) => {
  try{
    const projects = await getAllProjects()
    res.send(projects)
  }catch (e) {
    next(e)
  }
}
