const fs = require('fs');

class AddressGenerator {
    generateAddress() {
        const city = fs.readFileSync('../csv/address/city.csv', 'utf-8');
        const seoul = fs.readFileSync('../csv/address/countrySeoul.csv', 'utf-8');
        const gyeonggi = fs.readFileSync('../csv/address/countryGyeonggi.csv', 'utf-8');
        const busan = fs.readFileSync('../csv/address/countryBusan.csv', 'utf-8');
        const citySplit = city.split(',');
        const seoulSplit = seoul.split(',');
        const gyeonggiSplit = gyeonggi.split(',');
        const busanSplit = busan.split(',');

        const cityName = citySplit[Math.floor(Math.random() * citySplit.length)];
        let countryName;

        switch (cityName) {
            case '서울':
                countryName = seoulSplit[Math.floor(Math.random() * seoulSplit.length)];
                break;
            case '경기':
                countryName = gyeonggiSplit[Math.floor(Math.random() * gyeonggiSplit.length)];
                break;
            case '부산':
                countryName = busanSplit[Math.floor(Math.random() * busanSplit.length)];
                break;
        }

        const randDistrictNumber = Math.floor(Math.random() * 90 + 10);
        const randEndNumber = Math.floor(Math.random() * 90 + 10);
        const countryNumber = randDistrictNumber > 50 ? `${randDistrictNumber}길` : `${randDistrictNumber}로`;


        return `${cityName} ${countryName} ${countryNumber} ${randEndNumber}`;
    }
}

module.exports = AddressGenerator;