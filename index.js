require("colors");

const { inquirerMenu, pause, readInput, listToDelete, confirm, listToComplete, toggleStatus } = require("./helpers/inquirer");
const { saveDB, readDB } = require("./helpers/saveFile");
const Task = require("./models/task");
const Tasks = require("./models/Tasks");

const main = async () => {

  console.clear();
  let tasks = new Tasks();
  
  const taskDB = readDB();
  if (taskDB) {
    tasks.loadTasks(taskDB);
  }

  do {
    console.clear();
    opt = await inquirerMenu();

    switch (opt) {
      case "1":
        let description = await readInput("Description: ");
        tasks.createTasks(description);
        break;
      case "2":
        tasks.printLists("all");
        break;
      case "3":
        tasks.printLists("completed");
        break;
      case "4":
        tasks.printLists("pending");
        break;
        case "5":
        let ids = await listToComplete(tasks.listArr);
        console.log(ids.length);
        tasks.toggleStatus(ids)
        break;
        case "6":
        let id = await listToDelete(tasks.listArr);
        if(id !== 0 ) {
          let ok = await confirm("Are you sure you want to delete?")
          if(ok) {
            tasks.deleteTasks(id);
            console.log('Task Deleted');
          }
        }
        console.log('going back to the menu...');
        break;

    }

    saveDB(tasks.listArr);

    await pause();
  } while (opt !== "0");

  /* pause(); */
};

main();
