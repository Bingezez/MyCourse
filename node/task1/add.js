const fs = require('node:fs').promises;
const path = require('node:path');

const {boysPath, girlsPath, nameDirGirls, nameDirBoys} = require('./utils.js');


const arrayGirls = [{name: "Diana", gender: "female"},
                {name: "Anna", gender: "female"},
                {name: "Irina", gender: "female"},
                {name: "Tanya", gender: "female"},
                {name: "Sveta", gender: "female"}];

const arrayBoys = [{name: "Ruslan", gender: "male"},
                {name: "Vlad", gender: "male"},
                {name: "Vitalic", gender: "male"},
                {name: "Roman", gender: "male"},
                {name: "Max", gender: "male"}];

const arrayOther = [{name: "Vitaliy", gender: "other"},
                {name: "NoName", gender: "other"}];

// сoncat arrays.
const allArray = [...arrayGirls, ...arrayBoys, ...arrayOther];


// check if directory exist
const isDirExist = async (dir) => {
    try {
        await fs.access(dir);
        return true;
    } catch (err) {
        return false;
    }
}

// check if directory is not empty
const isFileInDir = async (dir) => {
    try {
        return await fs.readdir(dir).length > 0;
    } catch (err) {
        return false;
    }
};

// check if file exist
const isFileExist = async (file) => {
    try {
        await fs.access(file);
        return true;
    } catch (err) {
        return false;
    }
};

// create file
const createFile = async (path, name, data) => {
    await fs.writeFile(path, data)
        .then(() => {
            console.log(`File ${name} created successfully!`);
        })
        .catch((err) => {
            console.log(`Error create file ${name}: ${err}`);
        });
}

// create file with random data and defined sizes.
const createFileRandom = async (array, dir, size) => {
    const arrayIndex = [];
    for (let i = 0; i < size; i++) {
        let index = Math.floor(Math.random() * array.length);

        while (arrayIndex.includes(index)) {
            index = Math.floor(Math.random() * array.length);
        }
        arrayIndex.push(index);

        const name = `${array[index].name}.json`;

        if (await isFileExist(path.join(dir, name))) {
            console.log(`File ${name} already exist!`);
        } else {
            await createFile(path.join(dir, name), name, JSON.stringify(array[index]));
        };
    }
}

// main function
(async () => {
    if (await isDirExist(girlsPath)) {
        console.log(`Directory ${nameDirGirls} already exist!`);
    } else {
        await fs.mkdir(girlsPath).then(() => {
            console.log(`Directory ${nameDirGirls} created successfully!`);
        }).catch((err) => {
            console.log(`Error create directory ${nameDirGirls}: ${err}`);
        });
    };
    
    if (await isDirExist(boysPath)) {
        console.log(`Directory ${nameDirBoys} already exist!`);
    } else {
        await fs.mkdir(boysPath).then(() => {
            console.log(`Directory ${nameDirGirls} created successfully!`);
        }).catch((err) => {
            console.log(`Error create directory ${nameDirBoys}: ${err}`);
        });
    };


    if (await isFileInDir(girlsPath)) {
        console.log(`Directory ${nameDirGirls} is not empty!`);
    } else {
        await createFileRandom(allArray, girlsPath, 10);
    };


    if (await isFileInDir(boysPath)) {
        console.log(`Directory ${nameDirBoys} is not empty!`);
    } else {
        await createFileRandom(allArray, boysPath, 10);
    };
})();


module.exports = {boysPath, girlsPath};