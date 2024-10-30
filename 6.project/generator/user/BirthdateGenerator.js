class BirthdateGenerator {
    constructor() {
        this.currentYear = new Date().getFullYear();
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    generateBirthdate() {
        const year = this.currentYear - this.getRandomInt(20, 40);
        const month = String(this.getRandomInt(1, 12)).padStart(2, '0');
        const daysInMonth = {
            1: 31, 
            2: (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 29 : 28,  // 윤년 케이스 추가
            3: 31,
            4: 30,
            5: 31, 
            6: 30,
            7: 31, 
            8: 31, 
            9: 30, 
            10: 31,
            11: 30, 
            12: 31
        };
        const day = this.getRandomInt(1, daysInMonth[Number(month)]).toString().padStart(2, '0');
        
        
        return {
            age: 2024 - year + 1,
            fullYear: `${year}-${month}-${day}`
        }
        
    }
}

module.exports = BirthdateGenerator;