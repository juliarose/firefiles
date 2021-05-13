const FileDecorator = require('./');

class JSONFileDecorator extends FileDecorator {
    
    constructor(file, options = {}) {
        super(file);
        this.reviver = options.reviver || null;
        this.replacer = options.replacer || null;
        this.space = options.space || null;
    }
    
    async read() {
        return JSON.parse(await this.file.read(), this.reviver);
    }
    
    async write(data) {
        return this.file.write(JSON.stringify(data, this.replacer, this.space));
    }
}

module.exports = JSONFileDecorator;
