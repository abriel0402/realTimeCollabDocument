const express = require("express");
const {
  httpGetContent,
  httpCreateDocument,
} = require("./documents.controller.js");

const { httpUpdateContent } = require("./documents.controller.js");

const documentsRouter = express.Router();

documentsRouter.get("/api/get-content", httpGetContent);
documentsRouter.put("/api/update-content", httpUpdateContent);
documentsRouter.post("/api/create-document", httpCreateDocument);


module.exports = documentsRouter;
