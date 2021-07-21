const { v4: uuidv4 } = require('uuid');


class Task {
    id = '';
    description = '';
    completed = null;
    constructor( description, completed = null ){
        this.id = uuidv4()
        this.description = description;
        this.completed = completed;
    }
    
}

module.exports = Task;

