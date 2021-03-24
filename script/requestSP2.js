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
        var data = JSON.parse(this.response)
        var tasks = data.tasks
        var size = tasks.length
        // Si le nombre de tâche dépasse les 100
        if (size >= 100) {
            var request2 = new XMLHttpRequest();
            request2.open('GET', 'https://api.clickup.com/api/v2/list/42461988/task?include_closed=true&subtasks=true&reverse=true');
            request2.setRequestHeader('Authorization', token); //Serveur
            //request2.setRequestHeader('Authorization', 'pk_4594734_LQY0P1Q8YAZUBTOOI9XN7ALJ0LHP4C2R'); //local
            request2.setRequestHeader('Content-Type', 'application/json');
            request2.onload = function () {
                if (request2.status >= 200 && request2.status < 400) {
                    var data2 = JSON.parse(this.response)
                    var tasks2 = data2.tasks
                    for(var i = 0; i<tasks.length; i++) {
                        for (var j = 0; j<tasks2.length; j++) {
                            if(tasks2[j].id === tasks[i].id) {
                                tasks2.splice(j, 1)
                            }
                        }
                    }
                    for (var i = 0; i<tasks2.length; i++) {
                        tasks.push(tasks2[i])
                    }
                    size = tasks.length
                    timePerTask(tasks, size)
                    nbStatusTasks(tasks, size)
                    burndownChart(sprint)
                    progressTasks(tasks, size, sprint)
                    setTimeout(() =>  {
                        coutTache(tasks, size) 
                    }, 60000)
                }
            }
            request2.send();
        }
        else {
            timePerTask(tasks, size)
            nbStatusTasks(tasks, size)
            burndownChart(sprint)
            progressTasks(tasks, size, sprint)
            setTimeout(() =>  {
                coutTache(tasks, size) 
            }, 60000)
        }
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