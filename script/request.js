import nbStatusTasks from "./nbStatusTasksP3.js";
import timePerTask from "./timePerTaskP3.js";
import requestTasks from "./coutTache.js";

const token = localStorage.getItem('access_token')

// Requêtes
var request = new XMLHttpRequest();
var url = 'https://api.clickup.com/api/v2/list/40447037/task?include_closed=true&subtasks=true'

request.open('GET', url, true);
request.withCredentials = true;
request.setRequestHeader('Authorization', token);
request.setRequestHeader('Access-Control-Allow-Origin', '*');
request.setRequestHeader('Content-Type', 'application/json');
request.send();

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