import nbStatusTasks from "./nbStatusTasksP3.js";
import timePerTask from "./timePerTaskP3.js";
import requestTasks from "./coutTache.js";

const token = localStorage.getItem('access_token')
var seconds=60;
var timer;

// Requêtes
var request = new XMLHttpRequest();
var url = 'https://api.clickup.com/api/v2/list/40447037/task?include_closed=true&subtasks=true'
request.open('GET', url, true);
request.withCredentials = true;
request.setRequestHeader('Authorization', token); //Serveur
//request.setRequestHeader('Authorization', 'pk_4594734_LQY0P1Q8YAZUBTOOI9XN7ALJ0LHP4C2R'); //local
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
        document.getElementById("alert").style.display = "block";
        if(!timer) {
            timer = window.setInterval(function() {
                counter();
            }, 1000);
        }
        console.log('error')
    }
};

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