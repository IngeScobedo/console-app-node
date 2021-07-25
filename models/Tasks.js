const { v4: uuidv4 } = require("uuid");
const Task = require("./task");

class Tasks {
  _list = {};

  get listArr() {
    let list = [];

    Object.keys(this._list).forEach((key) => {
      const task = this._list[key];
      list.push(task);
    });

    return list;
  }

  constructor() {
    this._list = {};
  }

  createTasks(description = "", completed = false, date = "22/05/2002") {
    const task = new Task(description, completed, date);

    this._list[task.id] = task;
  }

  deleteTasks(id = ''){
    if (this._list[id]){
      delete this._list[id];
    }
  }

  loadTasks = (tasks = []) => {
    tasks.forEach((task) => (this._list[task.id] = task));
  };

  printTasks() {
    this.listArr.forEach(({ description, completed }, i) => {
      completed ? (completed = "Completed".green) : (completed = "Pending".red);

      let index = `${i + 1}.`.yellow.inverse;

      console.log(`${index} ${description} :: ${completed}`);
    });
  }

  filteredTasks(bool) {
    let result;
    bool
      ? (result = this.listArr.filter((task) => task.completed === true))
      : (result = this.listArr.filter((task) => task.completed === false));
    result.forEach(({ description, date }, index) => {
      let i = `${index + 1}`.blue;
      console.log(`${i}. ${description} ${'::'.yellow} ${date}`);
    });
  }

  printLists(option) {
    switch (option) {
      case "all":
        this.printTasks();
        break;
      case "completed":
        this.filteredTasks(true);
        break;
      case "pending":
        this.filteredTasks(false);
        break;
    }
  }
}

module.exports = Tasks;
