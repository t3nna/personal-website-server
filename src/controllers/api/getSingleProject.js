const {getProjectById} = require("../../services")

module.exports= async (req, res, next) =>{
  try{
  const id = req.params.id
    const project = await getProjectById(id)
    console.log(project)
    if (!project) {
      return next()
    }
    res.send(project)

  }catch (e){
    next(e)
  }

}
