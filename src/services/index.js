const {
  blogsFile,
  projectsFile,
  featuredFile,
  setFile,
  setupFile,
} = require("../config");
const { Blog } = require("../../db/mongoDB/schemes");

async function getAllBlogs() {
  try {
    // const data = await require(blogsFile);
    const data = await Blog.find();
    return data;
  } catch (e) {
    console.log(e);
  }
}

async function getBlogById(id) {
  console.log(id);
  try {
    // const data = await require(blogsFile);
    const data = await Blog.where("id").equals(id);

    // const res = await data.find(blog => {
    //   return blog.id === id;
    // });
    return data[0];
  } catch (e) {
    console.log(e);
  }
}

async function getAllProjects() {
  try {
    const data = await require(projectsFile);

    return data;
  } catch (e) {
    console.log(e);
  }
}

async function getProjectById(id) {
  try {
    const data = await require(projectsFile);

    const res = await data.find((project) => {
      return project.id === id;
    });
    return res;
  } catch (e) {
    console.log(e);
  }
}

async function getAllSetup() {
  try {
    const data = await require(setupFile);

    return data;
  } catch (e) {
    console.log(e);
  }
}

async function getSetupById(id) {
  console.log(id);
  try {
    const data = await require(blogsFile);

    const res = await data.find((item) => {
      return item.id === id;
    });
    return res;
  } catch (e) {
    console.log(e);
  }
}

module.exports = {
  getBlogById,
  getAllProjects,
  getProjectById,
  getAllBlogs,
  getAllSetup,
  getSetupById,
};
