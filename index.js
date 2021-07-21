require("colors");

const { inquirerMenu, pause, readInput } = require("./helpers/inquirer");
const { saveDB, readDB } = require("./helpers/saveFile");
const Task = require("./models/task");
const Tasks = require("./models/Tasks");

console.clear();

const main = async () => {
  let tasks = new Tasks();
  console.log(tasks);
  
  const taskDB = readDB();
  if (taskDB) {
    tasks.loadTasks(taskDB);
  }
  
  do {
    
    opt = await inquirerMenu();



    switch (opt) {
      case "1":
        let description = await readInput("Description: ");
        tasks.createTasks(description)

        break;
      case "2":
        console.log(tasks.listArr);
        console.log(tasks.printTasks());
        break;
      default:
        break;
    }
    
    saveDB(tasks.listArr)

    await pause();
  } while (opt !== "0");

  /* pause(); */
};

main();
