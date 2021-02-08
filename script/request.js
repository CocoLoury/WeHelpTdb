import nbStatusTasks from "./nbStatusTasksP3.js";
import timePerTask from "./timePerTaskP3.js";
import requestTasks from "./coutTache.js";

const token = localStorage.getItem('access_token')

// Requêtes
var request = new XMLHttpRequest();
request.withCredentials = true;

request.addEventListener("readystatechange", function() {
    if(this.readyState === 4) {
      console.log(this.responseText);
    }
  });

request.open('GET', 'https://api.clickup.com/api/v2/list/40447037/task?include_closed=true&subtasks=true');

request.setRequestHeader('Authorization', token);
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

var myHeaders = new Headers();
myHeaders.append("Authorization", token);

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://api.clickup.com/api/v2/list/40447037/task?include_closed=true&subtasks=true", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));