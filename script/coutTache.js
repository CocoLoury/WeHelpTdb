// Variables
var prix = []
var taches = []
var idParent = []

export default function requestTasks(tasks, size) {
    var enCours
    for(let i = 0; i < size; i++) {
        if(tasks[i].parent === null) {
            idParent.push(tasks[i].id)
            taches.push(tasks[i].name)
            prix.push(0)
        }
    }
    for(let i = 0; i < size; i++) {
        var requestTime = new XMLHttpRequest();
        requestTime.open('GET', 'https://api.clickup.com/api/v2/task/'+tasks[i].id+'/time/?custom_task_ids=&team_id=2644132');
        requestTime.setRequestHeader('Authorization', 'pk_4594734_LQY0P1Q8YAZUBTOOI9XN7ALJ0LHP4C2R');
        requestTime.setRequestHeader('Content-Type', 'application/json');
        requestTime.onload = function() {
            var res = JSON.parse(this.response)
            enCours = tasks[i]
            result(res, enCours)
        };
        requestTime.send()
    }
    setTimeout(() =>  { coutTache() }, 1000)
}

function result(res, enCours) {
    var price = 0
    for(let i = 0; i < res.data.length; i++) {
        var time = convertMS(res.data[i].time)
        switch(res.data[i].user.id) {
            case 6833952 :
                price += 37.50 * time
                break
            case 4594745 :
                price += 62.50 * time
                break
            case 6615132 :
                price += 50 * time
                break
            case 4594746 :
                price += 37.50 * time
                break
            case 6615133 :
                price += 50 * time
                break
            case 6833951 :
                price += 37.50 * time
                break
            case 4596253 :
                price += 37.50 * time
                break
            case 4594734 :
                price += 50 * time
                break
            case 2679874 :
                price += 37.50 * time
                break
            case 6833946 :
                price += 37.50 * time
                break
            case 6833949 :
                price += 50 * time
                break
            case 6833945 :
                price += 50 * time
                break
            default: 
                price += 0
        }
    }
    if(enCours.parent !== null) { //Enfant
        let condition = (element) => element === enCours.parent
        var place = idParent.findIndex(condition)
        prix[place] += price
    }
    else { //Parent
        let condition = (element) => element === enCours.id
        var place = idParent.findIndex(condition)
        prix[place] += price
    }
}

function convertMS(milliseconds) { //Conversion milliseconde en H
    var time
    return time = Math.floor(milliseconds / 1000 / 60 / 60);
}

function coutTache() { //Affichage du graphique
    //Charts
    var ctx = document.getElementById('coutTache').getContext('2d');
    var mixedChart = new Chart(ctx, {
        type: 'bar',
        data: {
            datasets: [{
                label: 'prix',
                data: prix,
                backgroundColor: 'rgba(17, 138, 178, 0.5)',
                borderWidth: 1,
            }],
            labels: taches,
            options: {
            }
        },
    });
}