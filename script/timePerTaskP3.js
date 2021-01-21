// Variables
var taches=[]
var temps=[]

export default function timePerTask(tasks, size) {
    for (let i=0; i<size;i++){
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
                    text: "Chart.js Time Scale"
                },
            }
        },
    });
}

function convertMS(milliseconds) {
    var time
    return time = Math.floor(milliseconds / 1000 / 60 / 60);
}