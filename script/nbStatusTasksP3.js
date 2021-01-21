// Variables
var stat=[]
var a = 0;
var b = 0;
var c = 0; 
var d = 0;
var res = []

export default function nbStatusTasks(tasks, size) {
    for (let i=0; i<size;i++){
    stat.push(tasks[i].status.status)
    }
    for (let j=0; j<stat.length;j++) {
    if(stat[j] == "done") {
        a += 1
    }
    if(stat[j] == "in progress") {
        b += 1
    }
    if(stat[j] == "in review") {
        c += 1
    }
    if(stat[j] == "to do") {
        d += 1
    }
    }
    res.push(a)
    res.push(b)
    res.push(c)
    res.push(d)
    // Charts
    var ctx = document.getElementById('nbStatusTasks').getContext('2d');
    var myPieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: [
                "Done",
                "In Progress",
                "In Review",
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
}