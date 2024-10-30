const Datetime = require('../user/BirthdateGenerator');

class OrderAtGenerator {     
    generateOrderAt() {
        const date = new Datetime();
        const dateYMD = date.generateBirthdate().fullYear;

        const hour = String(Math.floor(Math.random() * 24)).padStart(2, '0');
        const minute = String(Math.floor(Math.random() * 60)).padStart(2, '0');
        const second = String(Math.floor(Math.random() * 60)).padStart(2, '0');
        const dateHMS = `${hour}:${minute}:${second}`;

        return `${dateYMD} ${dateHMS}`;
    }
}

module.exports = OrderAtGenerator;