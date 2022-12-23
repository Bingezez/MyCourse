const fs = require('node:fs').promises;
const path = require('node:path');

const {boysPath, girlsPath} = require('./utils.js');

(async () => {
    fs.readdir(boysPath).then((files) => {
        for (const file of files) {

            const read = path.join(boysPath, file);

            fs.readFile(read, 'utf-8').then((data) => {
                data = JSON.parse(data);

                if (data.gender === "female") {
                    const write = path.join(girlsPath, file);
                    
                    fs.rename(read, write).then(() => {
                        console.log(`File ${file} moved successfully!`);
                    }).catch((err) => {
                        console.log(`Error move file ${file}: ${err}`);
                    });
                }
            })
        }
    });

    fs.readdir(girlsPath).then((files) => {
        for (const file of files) {

            const read = path.join(girlsPath, file);

            fs.readFile(read, 'utf-8').then((data) => {
                data = JSON.parse(data);

                if (data.gender === "male") {
                    const write = path.join(boysPath, file);

                    fs.rename(read, write).then(() => {
                        console.log(`File ${file} moved successfully!`);
                    }).catch((err) => {
                        console.log(`Error move file ${file}: ${err}`);
                    });
                }
            })
        }
    });
})();
