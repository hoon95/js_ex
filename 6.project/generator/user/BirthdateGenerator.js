class BirthdateGenerator {
    constructor() {
        this.currentYear = new Date().getFullYear();
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    getLeapYear(year) {     // 윤년 계산
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }

    getFullMonth(year, month) {
        const fullMonth = [31, this.getLeapYear(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        return fullMonth[month - 1];
    }

    generateBirthdate() {
        const year = this.currentYear - this.getRandomInt(20, 40);
        const month = String(this.getRandomInt(1, 12)).padStart(2, '0');
        const day = String(this.getRandomInt(1, this.getFullMonth(year, month))).padStart(2, '0');
        
        return {
            age: 2024 - year + 1,
            fullYear: `${year}-${month}-${day}`
        }
        
    }
}

module.exports = BirthdateGenerator;