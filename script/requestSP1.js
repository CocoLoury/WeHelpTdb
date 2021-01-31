import nbStatusTasks from "./nbStatusTasksP3.js";
import timePerTask from "./timePerTaskP3.js";
import burndownChart from "./burndownChart.js";
import progressTasks from "./progressTasks.js";
import coutTache from "./coutTache.js"

// Requêtes
var request = new XMLHttpRequest();

request.open('GET', 'https://api.clickup.com/api/v2/list/42429918/task?include_closed=true&subtasks=true');

request.setRequestHeader('Authorization', 'pk_4594734_LQY0P1Q8YAZUBTOOI9XN7ALJ0LHP4C2R');
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
        coutTache(tasks, size)
    } else {
        console.log('error')
    }
};
request.send();