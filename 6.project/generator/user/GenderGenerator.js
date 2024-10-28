class GenderGenerator {
    generateGender() {
        const gender = Math.random() > 0.5 ? 'Male' : 'Female';
        return gender;
    }
}

module.exports = GenderGenerator;