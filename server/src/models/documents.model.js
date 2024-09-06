const documents = require("./documents.mongo");
const mongoose = require("mongoose");

const path = require("path");

const ALPHABET = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function genCode() {
  let code = ""
  for(let i=0; i < 6; i++){
    num = Math.floor(Math.random()*26) 
    code += ALPHABET[num]
  }
  console.log(code)
  return code
}


async function getContent(code) {
  const document = await documents.findBy({code: code});
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



async function createDocument() {
  const document = new documents({ content: " ", code: genCode() });
  document.save()
  return document
}

module.exports = {
  getContent,
  updateContent,
  createDocument,
  
};
