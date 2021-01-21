// Variables
var taches=[]
var temps=[]

// Requêtes
var request = new XMLHttpRequest();

request.open('GET', 'https://api.clickup.com/api/v2/list/40447037/task?include_closed=true');

request.setRequestHeader('Authorization', 'pk_4594734_LQY0P1Q8YAZUBTOOI9XN7ALJ0LHP4C2R');
request.setRequestHeader('Content-Type', 'application/json');

request.onload = function () {
    var data = JSON.parse(this.response)
    var tasks = data.tasks
    var size = tasks.length
    if (request.status >= 200 && request.status < 400) {
    for (i=0; i<size;i++){
        taches.push(tasks[i].name)
        temps.push(convertMS(tasks[i].time_spent))
    }
    // Charts
    var ctx = document.getElementById('timePerTask').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: taches,
            datasets: [{
                label: 'Temps',
                data: temps,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }],
            options: {
                responsive: true,
                title: {
                    display: true,
                    text:    "Chart.js Time Scale"
                },
            }
        },
    });
    } else {
    console.log('error')
    }
}
request.send();

function convertMS(milliseconds) {
    return time = Math.floor(milliseconds / 1000 / 60 / 60);
}