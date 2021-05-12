const fs = require('fs');
const { promisify } = require('util');

module.exports = {
    readFile: promisify(fs.readFile),
    writeFile: promisify(fs.writeFile),
    access: promisify(fs.access),
    unlink: promisify(fs.unlink)
};
