class BirthdateGenerator {
    generateBirthdate() {
        const today = new Date();
        const year = today.getFullYear() - Math.floor(Math.random() * 20) - 20;
        const month = Math.floor(Math.random() * 12) + 1;
        const monthEdit = month >= 10 ? month : `0${month}`;

        // 월에 따른 날짜 계산
        let day = 1;
        const month_31 = [1, 3, 5, 7, 8, 10, 12];
        const month_30 = [4, 6, 9, 11];
        if(month_31.includes(month)) {
            day = Math.floor(Math.random() * 31) + 1;
        }else if(month_30.includes(month)) {
            day = Math.floor(Math.random() * 30) + 1;
        }else if(month == 2) {
            // 윤년 계산
            if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
                day = Math.floor(Math.random() * 29) + 1;
            } else {
                day = Math.floor(Math.random() * 28) + 1;
            }
        }
        
        const dayEdit = day >= 10 ? day : `0${day}`;
        
        return {
            age: 2024 - year + 1,
            fullYear: `${year}-${monthEdit}-${dayEdit}`
        }
        
    }
}

module.exports = BirthdateGenerator;