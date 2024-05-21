const documents = require("./documents.mongo");
const mongoose = require("mongoose");

const path = require("path");

async function getContent() {
  const document = await documents.findOne();
  if (!document) {
    return document.save({ content: " " });
  }
  return document;
}

async function updateContent(newContent) {
   // console.log("update content called")
    const document = await documents.findOne();
    if (document) {
      document.content = newContent;
      await document.save();
    } else {
      document = new Document({ content: newContent });
      await document.save();
    }
    return document;
  }

module.exports = {
  getContent,
  updateContent,
};
