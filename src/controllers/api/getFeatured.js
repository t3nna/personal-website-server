const { getFeatured, getAllBlogs, getAllProjects } = require("../../services");
const { featuredFile } = require("../../config");

module.exports = async (req, res, next) => {
  try {
    let featured = await require(featuredFile);

    featured = featured[0].featured;

    const [blogs, projects] = await Promise.all([
      getAllBlogs(),
      getAllProjects(),
    ]);
    const combined = [...blogs, ...projects];
    const result = combined.filter((item) => featured.includes(item.id));
    console.log(result);

    res.json(result);
  } catch (e) {
    next(e);
  }
};
