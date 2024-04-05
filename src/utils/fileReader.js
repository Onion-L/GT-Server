const path = require("path");
const fs = require("fs");
const XLSX = require("xlsx");

const fileReader = () => {
  return new Promise((reselve, reject) => {
    const dirPath = path.join(__dirname, "../uploads/");
    const fileNames = fs.readdirSync(dirPath);
    console.log(fileNames);
    const workbook = XLSX.readFile(
      path.join(dirPath, fileNames[fileNames.length - 1])
    );
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    // Convert worksheets to JSON objects
    const data = XLSX.utils.sheet_to_json(worksheet);
    reselve(data);
  });
};

module.exports = fileReader;
