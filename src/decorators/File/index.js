
class FileDecorator {
    
    constructor(file) {
        this.file = file;
    }
    
    async exists() {
        return this.file.exists();
    }
    
    async delete() {
        return this.file.delete();
    }
    
    async read() {
        return this.file.read();
    }
    
    async write(data) {
        return this.file.write(data);
    }
    
    get path() {
        return this.file.path;
    }
}

module.exports = FileDecorator;
