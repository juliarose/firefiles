const asyncFs = require('../helpers/fs');

class File {
    
    constructor(filepath) {
        this.path = filepath;
    }
    
    // throws if file does not exist
    async exists() {
        return asyncFs.access(this.path);
    }
    
    async delete() {
        return asyncFs.unlink(this.path);
    }
    
    // as bytes
    async read() {
        return asyncFs.readFile(this.path);
    }
    
    // data should be in bytes
    async write(data) {
        return asyncFs.writeFile(this.path, data);
    }
}

module.exports = File;
