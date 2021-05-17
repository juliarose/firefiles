# firefiles

Simple and flexible file management.

```javascript
const {
    File,
    JSONFileDecorator,
    Utf8FileDecorator,
    EncryptedFileDecorator
} = require('firefiles');

function createEncryptedJSONFile(filepath, password) {
    return new JSONFileDecorator(
        new Utf8FileDecorator(
            new EncryptedFileDecorator(
                new File(filepath),
                password
            )
        )
    );
}

(async function() {
    // path to save file to
    const filepath = 'secret.json';
    // password to use to encrypt this file
    const password = 'VerySecretP4ssw0rd';
    // create the file
    const file = createEncryptedJSONFile(filepath, password);
    
    // will stringify, encrypt, and write this data to file
    await file.write({
        secret: 'i love tokyo'
    });
    console.log('Data written to', file.path);
    
    // will read from the file and decrypt it,
    // converting it back into an object
    const { secret } = await file.read();
    
    console.log(secret);
    // i love tokyo
    
    // delet this
    await file.delete();
}());
```
