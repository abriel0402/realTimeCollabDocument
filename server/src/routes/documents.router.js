const express = require("express");
const { httpGetContent } = require("./documents.controller.js");
const { httpUpdateContent } = require("./documents.controller.js");

const documentsRouter = express.Router();

documentsRouter.get("/api/get-content", httpGetContent);
documentsRouter.put("/api/update-content", httpUpdateContent);


module.exports = documentsRouter;
