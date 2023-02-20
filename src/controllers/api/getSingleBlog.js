const {getBlogById} = require("../../services")
const {  blogsFile } = require("../../config");
module.exports= async (req, res, next) =>{
  try{
  const id = req.params.id
    const blog = await getBlogById(id)
    console.log(blog)
    if (!blog) {
      return next()
    }
    res.send(blog)

  }catch (e){
    next(e)
  }

}
