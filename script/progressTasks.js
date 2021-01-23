// Variables
var taches = []
var progress = []

export default function progressTasks(tasks, size) {
    for (let i=0; i<size;i++) {
        if(tasks[i].parent == null) {
            progress.push(tasks[i].custom_fields[2].value.percent_complete)
            taches.push(tasks[i].name)
        }
    }
    // Charts
    var ctx = document.getElementById('progressTasks').getContext('2d');
    var barChart = new Chart(ctx, {
        type: 'bar',
        data: {
            datasets: [{
                label: 'Progression',
                data: progress,
                backgroundColor: 'rgba(42, 157, 143, 0.5)',
                borderWidth: 1,
            }],
            labels: taches,
            options: {},
        },
    });
}