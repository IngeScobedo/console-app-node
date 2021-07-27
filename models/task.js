const { v4: uuidv4 } = require('uuid');
class Task {
    id = '';
    description = '';
    completed = false;
    date = null;
    constructor( description, completed = false, date = '22/05/2002' ){
        this.id = uuidv4()
        this.description = description;
        this.completed = completed;
        this.date = date;
    }
    
}

module.exports = Task;

