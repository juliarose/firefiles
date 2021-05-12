const FileDecorator = require('./');
const Crypto = require('../../models/Crypto');

class EncryptedFileDecorator extends FileDecorator {
    
    constructor(file, secret) {
        super(file);
        this.crypto = new Crypto(secret);
    }
    
    async update(secret) {
        this.crypto = new Crypto(secret);
    }
    
    async read() {
        return this.crypto.decode(await this.file.read());
    }
    
    async write(data) {
        return this.file.write(this.crypto.encode(data));
    }
}

module.exports = EncryptedFileDecorator;
