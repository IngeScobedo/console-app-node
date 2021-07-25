const fs = require('fs');

const FILE = './db/data.json'


const saveDB = (data) => fs.writeFileSync(FILE,JSON.stringify(data));

const readDB = () => {
    if (!fs.existsSync(FILE)) {
        return null;
    }
    const info = fs.readFileSync(FILE,{encoding: 'utf-8'})
    const data = JSON.parse(info)
    return data;
}

module.exports = {
    saveDB,
    readDB
};
