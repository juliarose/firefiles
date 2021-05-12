const {
    File,
    CSVFileDecorator,
    Utf8FileDecorator
} = require('../src');

function createCSVFile(filepath, columns) {
    return new CSVFileDecorator(
        new Utf8FileDecorator(
            new File(filepath)
        ),
        columns
    );
}

(async function() {
    const filepath = 'sales.csv';
    const file = createCSVFile(filepath, [
        {
            header: 'Name',
            key: 'name'
        },
        {
            header: 'Price',
            key: 'price',
            parser(value) {
                return Math.round(parseFloat(value) * 100);
            },
            converter(value) {
                return value / 100;
            }
        }
    ]);
    const sales = [
        ['Tomb Readers', 23],
        ['Colonel\'s Coat', 29],
        ['Burning Question', 40],
        ['Strange Buff Banner', 50],
        ['Strange Cow Mangler 5000', 29]
    ].map(([name, price]) => ({ name, price }));
    
    await file.write(sales);
    console.log('Data written to', file.path);
    
    console.log(await file.read()); 
    // delete this
    await file.delete();
}());
