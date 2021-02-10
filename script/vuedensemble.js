//Variable
var prixGlobal = 0
var avancement = []
var calcul = 0
var res = 0

main()

async function main() {
    var sprint = await getData().then(response => response.vuedensemble.vueSprint)
    document.getElementById("prixSprint1").innerHTML = sprint[0].sprint + "€";
    document.getElementById("prixSprint2").innerHTML = sprint[1].sprint + "€";
    document.getElementById("prixSprint3").innerHTML = sprint[2].sprint + "€";
    document.getElementById("prixSprint4").innerHTML = sprint[3].sprint + "€";
    for(let i = 0; i<sprint.length; i++) {
        prixGlobal += sprint[i].sprint
        avancement.push(sprint[i].avancement)
    }
    for(let i = 0; i<avancement.length; i++) {
        calcul += avancement[i] 
    }
    res = calcul/avancement.length/100
    document.getElementById("prixProjet").innerHTML = prixGlobal + "€";
    var ctx = document.getElementById('progressTask');
    var mixedChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Sprint 1','Sprint 2','Sprint 3','Sprint 4'],
            datasets: [{
                label: 'Avancement',
                data: avancement,
                backgroundColor: 'rgba(11, 156, 49, 0.5)',
                borderWidth: 1,
                //borderRadius: [100, 100, 100 ,100]
            }],
        },
        options: {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true,
                  min: 0,
                  max: 100,
                  stepSize: 10,
                }
              }]
            }
          }
    });

    //Progress Bar
    var progression = document.getElementById('progress');
    var bar = new ProgressBar.Circle(progression, {
        color: '#aaa',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 6,
        trailWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        text: {
        autoStyleContainer: false
        },
        from: { color: 'rgba(11, 156, 49, 0.5)', width: 6 },
        to: { color: 'rgba(11, 156, 49, 0.5)', width: 6 },
        // Set default step function for all animate calls
        step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);
    
        var value = Math.round(circle.value() * 100);
        if (value === 0) {
            circle.setText('');
        } else {
            circle.setText(value+"%");
        }
    
        }
    });
    bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    bar.text.style.fontSize = '2rem';
  
    bar.animate(res);  // Number from 0.0 to 1.0
}

async function getData () {
    return fetch('./data.json')
            .then(result => result.json())
}

