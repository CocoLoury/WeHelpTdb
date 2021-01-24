import nbStatusTasks from "./nbStatusTasksP3.js";
import timePerTask from "./timePerTaskP3.js";

// Requêtes
var connect = new XMLHttpRequest();
var request = new XMLHttpRequest();
var code = window.location.search
console.log(code)
connect.open('GET', 'https://app.clickup.com/api/v2/oauth/token&'+code+'&client_id=72YEPZMRZ3EJI0CRC3QKCJIJJJZAFW1E&client_secret=H8CG1W57RSXRL11P2ZNKTJLZSUUIMCDSEME9XILDFCBYMFKTS6NJFCNJV8SFMRKN');



request.open('GET', 'https://api.clickup.com/api/v2/list/40447037/task?include_closed=true&subtasks=true');

request.setRequestHeader('Authorization', connect.send());
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