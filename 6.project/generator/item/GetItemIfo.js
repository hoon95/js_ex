const fs = require('fs');
const { parse } = require('csv-parse/sync');

class GetItemInfo { 
    Item() {
        const data = fs.readFileSync('../csv/item/item.csv', 'utf-8');
        const unit = parse(data, {
            columns: true
        });

        return unit;
    }
}

module.exports = GetItemInfo;