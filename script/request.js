import nbStatusTasks from "./nbStatusTasksP3.js";
import timePerTask from "./timePerTaskP3.js";

// Requêtes
var request = new XMLHttpRequest();

request.open('GET', 'https://api.clickup.com/api/v2/list/40447037/task?include_closed=true&subtasks=true');

request.setRequestHeader('Authorization', '4594734_aa5ae1ce9bab31dfaa0ff7864860c49a0b86c1aa');
request.setRequestHeader('X-Api-Key', '72YEPZMRZ3EJI0CRC3QKCJIJJJZAFW1E');
request.setRequestHeader('Content-Type', 'application/json');

request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
        var data = JSON.parse(this.response)
        var tasks = data.tasks
        var size = tasks.length
        timePerTask(tasks, size)
        nbStatusTasks(tasks, size)
    } else {
        console.log('error')
    }
};
request.send();