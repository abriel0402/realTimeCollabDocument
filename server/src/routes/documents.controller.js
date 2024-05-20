const { getContent } = require("../models/documents.model.js");
const { updateContent } = require("../models/documents.model.js");

async function httpGetContent(req, res) {
  console.log("Http get content called");
  try {
    const documentContent = await getContent();
    console.log("got content");
    return res.status(200).json(documentContent);
  } catch (err) {
    console.log("server errror");
    console.error(err);
    return res.status(500).json({ error: "server error" });
  }
}

async function httpUpdateContent(req, res) {
  try {
    const { content } = req.body;
    if (!content) {
      return res.status(400).json({ error: "Content is required" });
    }
    const updatedDocument = await updateContent(content);
    return res.status(200).json(updatedDocument);
  } catch (err) {
    console.log("ERROR:", err);
    return res.status(500).json({ error: "Server error" });
  }
}


module.exports = {
  httpGetContent,
  httpUpdateContent,
};
