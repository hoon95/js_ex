const fs = require('fs');

function readCSV(filePath, callback) {
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if(err) {
            callback(err, null);
            return;
        }
        const rows = data.split('\n');
        const result = rows.map((row)=>row.split(','));

        callback(null, result);
    });
}

function writeCSV(filePath, content, callback) {
    const csvContent = content.map((row)=>row.join(',')).join('\n');

    fs.writeFile(filePath, csvContent, (err) => {
        if(err) {
            console.error(err.message);
            callback(err);
            return;
        }
        console.log('쓰기 완료');
        callback(null);
    })
}

module.exports = { readCSV, writeCSV };