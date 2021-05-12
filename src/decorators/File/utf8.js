const FileDecorator = require('./');
const { StringDecoder } = require('string_decoder');
const decoder = new StringDecoder('utf8');
const encoder = new TextEncoder();
const toUtf8 = (bytes) => decoder.write(bytes);

class Utf8FileDecorator extends FileDecorator {
    
    constructor(file) {
        super(file);
    }
    
    async read() {
        return this.file.read().then(toUtf8);
    }
    
    async write(data) {
        return this.file.write(encoder.encode(data));
    }
}

module.exports = Utf8FileDecorator;
