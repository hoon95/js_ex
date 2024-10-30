const fs = require('fs');

class AddressGenerator {
    constructor() {
        this.city = fs.readFileSync('../csv/address/city.csv', 'utf-8').split(',');
        this.seoul = fs.readFileSync('../csv/address/countrySeoul.csv', 'utf-8').split(',');
        this.gyeonggi = fs.readFileSync('../csv/address/countryGyeonggi.csv', 'utf-8').split(',');
        this.busan = fs.readFileSync('../csv/address/countryBusan.csv', 'utf-8').split(',');
    }

    generateAddress() {

        const cityName = this.city[Math.floor(Math.random() * this.city.length)];
        let countryName;

        switch (cityName) {
            case '서울':
                countryName = this.seoul[Math.floor(Math.random() * this.seoul.length)];
                break;
            case '경기':
                countryName = this.gyeonggi[Math.floor(Math.random() * this.gyeonggi.length)];
                break;
            case '부산':
                countryName = this.busan[Math.floor(Math.random() * this.busan.length)];
                break;
        }

        const randDistrictNumber = Math.floor(Math.random() * 90 + 10);
        const randEndNumber = Math.floor(Math.random() * 90 + 10);
        const countryNumber = randDistrictNumber > 50 ? `${randDistrictNumber}길` : `${randDistrictNumber}로`;


        return `${cityName} ${countryName} ${countryNumber} ${randEndNumber}`;
    }
}

module.exports = AddressGenerator;