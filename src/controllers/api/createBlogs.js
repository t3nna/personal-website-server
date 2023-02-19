const { blogsFile } = require("../../config");
const { BadRequestApiError } = require("../../validators/errors/ApiError");
const fs = require("fs").promises
module.exports = async (req, res, next) => {
  try {
    const {content} = req.body

    if(!content){
      throw new BadRequestApiError('please provide "content"')
    }

    // TODO: validation, save logs, download DB

    const blogs = require(blogsFile);
    content.created = `${new Date()}`
    blogs.push(content)
    console.log(blogs);

    await fs.writeFile(blogsFile, JSON.stringify(blogs, null, 2 ), "utf-8")

    return res.json({ message: "created" });
  } catch (e) {
    return next(e)
  }
};
