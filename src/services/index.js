const {  blogsFile, projectsFile, featuredFile } = require("../config");

async function getAllBlogs(){
  try {
    const data = await require(blogsFile)

    return data
  }
  catch (e){
    console.log(e);
  }
}

async function getBlogById(id){
  console.log(id);
  try{
    const data = await require(blogsFile)

    const res = await data.find(blog =>{
      return blog.id === id
    })
    return res
  }catch (e){
    console.log(e);
  }
}

async function getAllProjects(){
  try{
    const data = await require(projectsFile)

    return data
  }
  catch (e){
    console.log(e);
  }
}
async function getProjectById(id){
  try{
    const data = await require(projectsFile)

    const res = await data.find(project =>{
      return project.id === id
    })
    return res
  }catch (e){
    console.log(e);
  }
}


module.exports = {
  getBlogById,
  getAllProjects,
  getProjectById,
  getAllBlogs
}
