import nbStatusTasks from "./nbStatusTasksP3.js";
import timePerTask from "./timePerTaskP3.js";
import burndownChart from "./burndownChart.js";
import progressTasks from "./progressTasks.js";
import coutTache from "./coutTache.js"

const token = localStorage.getItem('access_token')
var seconds=60;
var timer;
var sprint = 2;

// Requêtes
var request = new XMLHttpRequest();

request.open('GET', 'https://api.clickup.com/api/v2/list/42461988/task?include_closed=true&subtasks=true');

request.setRequestHeader('Authorization', token); //Serveur
//request.setRequestHeader('Authorization', 'pk_4594734_LQY0P1Q8YAZUBTOOI9XN7ALJ0LHP4C2R'); //local
request.setRequestHeader('Content-Type', 'application/json');

request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
        //document.getElementById("alert").style.display = "none";
        var data = JSON.parse(this.response)
        var tasks = data.tasks
        var size = tasks.length
        timePerTask(tasks, size)
        nbStatusTasks(tasks, size)
        burndownChart(sprint)
        progressTasks(tasks, size)
        coutTache(tasks, size)
    } else {
        document.getElementById("alert").style.display = "block";
        if(!timer) {
            timer = window.setInterval(function() {
                counter();
            }, 1000);
        }
        console.log('error')
    }
};
request.send();

function counter() {
    if(seconds < 60) {
        document.getElementById("counter").innerHTML = seconds + " secondes";
    }
    if (seconds > 0) {
        seconds--;
    } else {
        clearInterval(timer);
    }
}