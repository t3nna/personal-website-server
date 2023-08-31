const path = require("path");
const util = require("util");
const fs = require("fs");

const { dbFolder } = require("../../config");
const { BadRequestApiError } = require("../../validators/errors/ApiError");

const existsFileAsync = util.promisify(fs.exists);

const exists = async (pathToFile) => {
  return await existsFileAsync(pathToFile);
};
module.exports = async (req, res, next) => {
  try {
    const { filename } = req.params;

    if (!filename) {
      throw new BadRequestApiError("Filename is not correct or not provided");
    }

    const pathToFile = path.resolve(dbFolder, "files", filename);
    console.log(pathToFile);
    const isFileExists = await exists(pathToFile);

    if (!isFileExists) {
      throw new BadRequestApiError("File not found");
    }

    return res.download(pathToFile);
  } catch (e) {
    next(e);
  }
};
