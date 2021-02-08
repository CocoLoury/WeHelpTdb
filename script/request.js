import nbStatusTasks from "./nbStatusTasksP3.js";
import timePerTask from "./timePerTaskP3.js";
import requestTasks from "./coutTache.js";

// Requêtes
var request = new XMLHttpRequest();
var authorization = localStorage.getItem('access_token');

setTimeout(() =>  {
request.open('GET', 'https://api.clickup.com/api/v2/list/40447037/task?include_closed=true&subtasks=true');

request.setRequestHeader('Authorization', authorization);
request.setRequestHeader('Content-Type', 'application/json');

request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
        var data = JSON.parse(this.response)
        var tasks = data.tasks
        var size = tasks.length
        timePerTask(tasks, size)
        nbStatusTasks(tasks, size)
        requestTasks(tasks, size)
    } else {
        console.log('error')
    }
};
request.send();
},1000);