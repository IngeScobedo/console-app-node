const { v4: uuidv4 } = require("uuid");
const Task = require("./task");

class Tasks {
  _list = {};

  get listArr() {
    let list = [];

    Object.keys(this._list).forEach((key) => {
      const { description, completed } = this._list[key];
      list.push({ description, completed });
    });

    return list;
  }

  constructor() {
    this._list = {};
  }
  printTasks() {
    let taskArray = [
      {
          value: '1',
          name: `${'1.-'.red.bold} ${'Create Task'.green.bold}`
      },
      {
          value: '2',
          name: `${'2.-'.red.bold} ${'Show Tasks'.green.bold}`
      },
      {
          value: '3',
          name: `${'3.-'.red.bold} ${'Show Completed Tasks'.green.bold}`
      },
      {
          value: '4',
          name: `${'4.-'.red.bold} ${'Show Pending Tasks'.green.bold}`
      },
      {
          value: '5',
          name: `${'5.-'.red.bold} ${'Complete Tasks'.green.bold}`
      },
      {
          value: '6',
          name: `${'6.-'.red.bold} ${'Delete Tasks'.green.bold}`
      },
      {
          value: '0',
          name: `${'0.-'.red.bold} ${'Exit'.green.bold}`
      }
  ];
    let choices = 
    [
      {
        type: 'list',
        name: 'taskSelected',
        message: `${"U can select a task to primary task\n".inverse}`,
        
      }
    ];

    this.listArr.forEach((o, i) => {
      console.log(`${i + 1}- ${o.description} - ${o.completed}`);
    });
  }

  loadTasks = (tasks = []) => {
    tasks.forEach((task) => (this._list[task.id] = task));
  };

  createTasks(description = "") {
    const task = new Task(description);

    this._list[task.id] = task;
  }
}

module.exports = Tasks;
