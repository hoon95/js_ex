const { v4: uuidv4 } = require('uuid');

class IdGenerator { 
    generateId() {
        return uuidv4();
    }
}

module.exports = IdGenerator;