// Variables
var taches=[]
var tempsReel=[]
var tempsEstim=[]

export default function timePerTask(tasks, size) {
    for (let i=0; i<size;i++) {
        if(tasks[i].parent !== null) {
            for(let j=0; j<size;j++){
                if(tasks[i].parent === tasks[j].id){
                    if(tasks[i].time_spent !== undefined) {
                        tasks[j].time_spent += tasks[i].time_spent
                    }
                    if(tasks[i].time_estimate !== undefined) {
                        tasks[j].time_estimate += tasks[i].time_estimate
                    }
                }
            }
        }
    }
    for (let i=0; i<size;i++) {
        if(tasks[i].parent == null) {
            taches.push(tasks[i].name)
            tempsReel.push(convertMS(tasks[i].time_spent))
            tempsEstim.push(convertMS(tasks[i].time_estimate))
        }
    }
    // Charts
    var ctx = document.getElementById('timePerTask').getContext('2d');
    var mixedChart = new Chart(ctx, {
        type: 'bar',
        data: {
            datasets: [{
                label: 'Temps réel',
                data: tempsReel,
                backgroundColor: 'rgba(17, 138, 178, 0.5)',
                borderWidth: 1,
            }, {
                label: 'Temps estimé',
                borderColor: 'rgba(239, 71, 111, 0.5)',
                backgroundColor: 'rgba(255,255,255,0)',
                data: tempsEstim,
                type: 'line'
            }],
            labels: taches,
            options: {
            }
        },
    });
}

function convertMS(milliseconds) {
    var time
    return time = Math.round((milliseconds / 1000 / 60 / 60)*100)/100;
}