const path = require("path");
const XLSX = require("xlsx");

const fileReader = (filename) => {
  return new Promise((reselve, reject) => {
    const dirPath = path.join(__dirname, "../uploads/");
    const workbook = XLSX.readFile(path.join(dirPath, `${filename}.xlsx`));
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    // Convert worksheets to JSON objects
    const data = XLSX.utils.sheet_to_json(worksheet);
    reselve(data);
  });
};

module.exports = fileReader;
