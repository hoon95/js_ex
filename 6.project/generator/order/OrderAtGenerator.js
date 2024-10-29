const Datetime = require('../user/BirthdateGenerator');

class OrderAtGenerator { 
    generateOrderAt() {
        const date = new Datetime();
        const dateYMD = date.generateBirthdate().fullYear;
        
        let hour = Math.floor(Math.random() * 24);
        let minute = Math.floor(Math.random() * 60);
        let second = Math.floor(Math.random() * 60);

        hour = String(hour).padStart(2,'0');
        minute = String(minute).padStart(2,'0');
        second = String(second).padStart(2,'0');

        const dateHMS = `${hour}:${minute}:${second}`;
        
        return `${dateYMD} ${dateHMS}`;
    }
}

module.exports = OrderAtGenerator;