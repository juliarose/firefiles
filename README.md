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
    // some json data we want to keep secret
    const json = {
        user_id: 1,
        message: 'i love tokyo'
    };
    
    // will stringify, encrypt, and write this data to file
    await file.write(json);
    console.log('Data written to', file.path);
    
    // will read from the file and decrypt it,
    // converting it back into an object
    const { message } = await file.read();
    
    console.log(message);
    // i love tokyo
    
    // delete this
    await file.delete();
}());
```
