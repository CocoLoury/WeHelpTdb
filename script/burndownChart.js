// Variables
var trvReel = []
var trvEstime = []

export default async function burndownChart(sprint) {
    // Donnée du fichier data.json
    var data
    switch(sprint) {
        case 1 :
            data = await getData().then(response => response.burndownChart.sprint1)
            break
        case 2 :
            data = await getData().then(response => response.burndownChart.sprint2)
            break
        case 3 : 
            data = await getData().then(response => response.burndownChart.sprint3)
            break
        case 4 : 
            data = await getData().then(response => response.burndownChart.sprint4)    
            break
    }

    // Créatio du tableau de trajectoire idéal sprint
    var totalSprintEstimate = data.totalSprintEstimate;
    var totalDays = 5; 
    var idealIncrement = totalSprintEstimate / totalDays;
    var ideal = [];
    for (let i = 0; i <= totalDays-1; i++) {
        ideal.push(idealIncrement * (i+1));
    }
    ideal.reverse()

    // Remplissage du tableau de pc estimé
    for (let i = 0; i < data.estimation.length; i++) {
        trvEstime.push(data.estimation[i].pcEstime)
    }

    // Remplissage du tableau de pc réel
    for (let i = 0; i < data.reel.length; i++) {
        trvReel.push(data.reel[i].pcReel)
    }

    // Charts
    var ctx = document.getElementById('burndowChart').getContext('2d');
    var mixedChart = new Chart(ctx, {
        type: 'bar',
        data: {
            datasets: [{
                label: 'PC restant',
                data: trvReel,
                borderColor: 'rgba(239, 100, 0, 0.5)',
                backgroundColor: 'rgba(255,255,255,0)',
                borderWidth: 1,
                type: 'line'
            }, {
                label: 'PC estimé',
                borderColor: 'rgba(239, 71, 111, 0.5)',
                backgroundColor: 'rgba(255,255,255,0)',
                data: trvEstime,
                type: 'line'
            }, {
                label: 'Idéal',
                borderColor: 'rgba(111, 71, 111, 0.5)',
                backgroundColor: 'rgba(255,255,255,0)',
                data: ideal,
                lineTension: 0,
                type: 'line',
            }],
            labels: ['Jour 1','Jour 2','Jour 3','Jour 4','Jour 5'],
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        },
    });
}

async function getData () {
    return fetch('./data.json')
            .then(result => result.json())
}