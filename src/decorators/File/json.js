const FileDecorator = require('./');

class JSONFileDecorator extends FileDecorator {
    
    constructor(file, replacer, space) {
        super(file);
        this.replacer = replacer || null;
        this.space = space || null;
    }
    
    async read() {
        return JSON.parse(await this.file.read());
    }
    
    async write(data) {
        return this.file.write(JSON.stringify(data, this.replacer, this.space));
    }
}

module.exports = JSONFileDecorator;
