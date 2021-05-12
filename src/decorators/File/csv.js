const FileDecorator = require('./');
const { toCSV, fromCSV } = require('salsacsv');

class CSVFileDecorator extends FileDecorator {
    
    constructor(file, columns, options) {
        super(file);
        this.columns = columns;
        this.options = options || {
            includeHeader: true
        }
    }
    
    async read() {
        return fromCSV(await this.file.read(), this.columns, this.options);
    }
    
    async write(data) {
        return this.file.write(toCSV(data, this.columns, this.options));
    }
}

module.exports = CSVFileDecorator;
