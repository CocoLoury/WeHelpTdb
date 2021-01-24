import nbStatusTasks from "./nbStatusTasksP3.js";
import timePerTask from "./timePerTaskP3.js";
import burndownChart from "./burndownChart.js";
import progressTasks from "./progressTasks.js";

// Requêtes
var request = new XMLHttpRequest();

request.open('GET', 'https://api.clickup.com/api/v2/list/42429918/task?include_closed=true&subtasks=true');

request.setRequestHeader('Authorization', '4594734_aa5ae1ce9bab31dfaa0ff7864860c49a0b86c1aa');
request.setRequestHeader('Content-Type', 'application/json');

request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
        var data = JSON.parse(this.response)
        var tasks = data.tasks
        var size = tasks.length
        timePerTask(tasks, size)
        nbStatusTasks(tasks, size)
        burndownChart()
        progressTasks(tasks, size)
    } else {
        console.log('error')
    }
};
request.send();