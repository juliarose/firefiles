const aesjs = require('aes-js');
const TextEncoder = require('util').TextEncoder;
const crypto = require('crypto');

function isBytes(object) {
    return object && object.byteLength !== undefined;
}

function encrypt(key, data) {
    const encoder = new TextEncoder();
    const textBytes = isBytes(data) ? data : encoder.encode(data);
    // the counter is optional, and if omitted will begin at 1
    const aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
    
    // encrypted bytes
    return aesCtr.encrypt(textBytes);
}

function decrypt(key, data, returnBytes = true) {
    const encoder = new TextEncoder();
    const encryptedBytes = isBytes(data) ? data : encoder.encode(data);
    // the counter mode of operation maintains internal state, so to
    // decrypt a new instance must be instantiated.
    const aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
    const decryptedBytes = aesCtr.decrypt(encryptedBytes);
    
    // we want to return the value as bytes
    if (returnBytes) {
        return decryptedBytes;
    }
    
    // convert our bytes back into text
    return aesjs.utils.utf8.fromBytes(decryptedBytes);
}

function getCipherKey(password) {
    return crypto.createHash('sha256').update(password).digest();
}

module.exports = {
    encrypt,
    decrypt,
    getCipherKey
};
