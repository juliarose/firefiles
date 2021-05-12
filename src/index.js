const File = require('./models/File');
const FileDecorator = require('./decorators/File');
const Utf8FileDecorator = require('./decorators/File/utf8');
const EncryptedFileDecorator = require('./decorators/File/encrypted');
const JSONFileDecorator = require('./decorators/File/json');
const CSVFileDecorator = require('./decorators/File/csv');

module.exports = {
    File,
    FileDecorator,
    Utf8FileDecorator,
    EncryptedFileDecorator,
    JSONFileDecorator,
    CSVFileDecorator
};
