const crypto = require('../helpers/crypto');

class Crypto {
    
    constructor(secret) {
        this.key = crypto.getCipherKey(secret);
    }
    
    encode(data) {
        return crypto.encrypt(this.key, data);
    }
    
    decode(data) {
        return crypto.decrypt(this.key, data);
    }
}

module.exports = Crypto;
