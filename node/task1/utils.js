const path = require('node:path');

const nameDirGirls = "girls";
const nameDirBoys = "boys";

const girlsPath = path.join(__dirname, nameDirGirls);
const boysPath = path.join(__dirname, nameDirBoys);

module.exports = {boysPath, girlsPath, nameDirGirls, nameDirBoys};