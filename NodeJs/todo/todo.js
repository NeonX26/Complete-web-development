const fs = require('fs');
const filePath = "NodeJs/todo/tasks.json";

const loadTask = () =>{
    try {
        const dataBuffer = fs.readFileSync(filePath);
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);
    } catch (error) {
        return [];
    }
}

const saveTask = (tasks) =>{
    const dataJson = JSON.stringify(tasks);
    fs.writeFileSync(filePath, dataJson);
}

const addTask = (task) =>{
    const tasks = loadTask();
    tasks.push({task});
    saveTask(tasks);
    console.log("Task added successfully");
    
}

const listTask = () =>{
    const tasks = loadTask();
    tasks.forEach((task, index) => {
        console.log(`${index + 1}. ${task.task}`);
    });
}

const command = process.argv[2];
const args = process.argv[3];

if (command === "add") {
    addTask(args);
} else if (command === "list") {
    listTask();
}else if (command === "remove") {
    removeTask(parseInt(args));
}else {
    console.log("Invalid command");
}
