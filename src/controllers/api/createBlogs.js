const { blogsFile } = require("../../config");
const { BadRequestApiError } = require("../../validators/errors/ApiError");
const fs = require("fs").promises;
module.exports = async (req, res, next) => {
  try {
    const { content } = req.body;

    if (!content) {
      throw new BadRequestApiError('please provide "content"');
    }

    // TODO: validation, save logs

    const requiredFields = [
      "name",
      "id",
      "style",
      "type",
      "cover",
      "embedVideo",
      "carousel",
      "projectTeam",
      "description",
      "body",
    ];

    requiredFields.forEach((field) => {
      if (!content[field]) {
        throw new BadRequestApiError(
          `Missing ${field} in request body, \n all required fields: ${requiredFields.join(
            ", "
          )}`
        );
      }
    });
    if (Object.keys(content).length !== requiredFields.length) {
      throw new BadRequestApiError(
        `Please provide all required fields: ${requiredFields.join(", ")}`
      );
    }

    const blogs = require(blogsFile);
    content.created = new Date().toJSON();
    blogs.push(content);
    console.log(blogs);

    await fs.writeFile(blogsFile, JSON.stringify(blogs, null, 2), "utf-8");

    return res.json({ message: "created" });
  } catch (e) {
    return next(e);
  }
};
