// Variables
var stat=[]
var a = 0;
var b = 0;
var c = 0; 
var res = []

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
            stat.push(tasks[i].status.status)
        }
        for (j=0; j<stat.length;j++) {
            if(stat[j] == "done") {
                a += 1
            }
            if(stat[j] == "in progress") {
                b += 1
            }
            if(stat[j] == "to do") {
                c += 1
            }
        }
        res.push(a)
        res.push(b)
        res.push(c)
        // Charts
        var ctx = document.getElementById('nbStatusTasks').getContext('2d');
        var myPieChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: [
                    "Done",
                    "In Progress",
                    "To Do"
                ],
                datasets: [{
                    data: res,
                    backgroundColor: [
                        "#FF6384",
                        "#4BC0C0",
                        "#FFCE56"
                    ],
                    label: 'My dataset'
                }],
            },
            options: {
                responsive: true,
                title: {
                    display: true,
                    text: "Status des tâches"
                },
            }
        });
    } else {
        console.log('error')
    }
};
request.send();