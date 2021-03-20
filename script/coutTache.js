// Variables
var prix = []
var taches = []
var idParent = []
var tempsColinL = 0;
var tempsArmand = 0;
var tempsQuentin = 0;
var tempsColinC = 0;
var tempsJulien = 0;
var tempsMyriam = 0;
var tempsKhadidja = 0;
var tempsSouhail = 0;
var tempsAlexF = 0;
var tempsAlexC = 0;
var tempsAntoine = 0;
var tempsSteven = 0;
var seconds=60;
var timer;
const token = localStorage.getItem('access_token')

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
        requestTime.setRequestHeader('Authorization', token); // Serveur
        //requestTime.setRequestHeader('Authorization', 'pk_4594734_LQY0P1Q8YAZUBTOOI9XN7ALJ0LHP4C2R'); // Local
        requestTime.setRequestHeader('Content-Type', 'application/json');
        requestTime.onload = function() {
            if (requestTime.status == 429) {
                document.getElementById("alert").style.display = "block";
                if(!timer) {
                    timer = window.setInterval(function() {
                        counter();
                    }, 2000);
                }
            }
            var res = JSON.parse(this.response)
            enCours = tasks[i]
            result(res, enCours)
        };
        requestTime.send()
    }
    setTimeout(() =>  {
        coutTache()
        document.getElementById("tempsAlexF").innerHTML = Math.round(tempsAlexF*100)/100 + "h";
        document.getElementById("tempsArmand").innerHTML = Math.round(tempsArmand*100)/100 + "h";
        document.getElementById("tempsQuentin").innerHTML = Math.round(tempsQuentin*100)/100 + "h";
        document.getElementById("tempsColinC").innerHTML = Math.round(tempsColinC*100)/100 + "h";
        document.getElementById("tempsSouhail").innerHTML = Math.round(tempsSouhail*100)/100 + "h";
        document.getElementById("tempsJulien").innerHTML = Math.round(tempsJulien*100)/100 + "h";
        document.getElementById("tempsSteven").innerHTML = Math.round(tempsSteven*100)/100 + "h";
        document.getElementById("tempsColinL").innerHTML = Math.round(tempsColinL*100)/100 + "h";
        document.getElementById("tempsAlexC").innerHTML = Math.round(tempsAlexC*100)/100 + "h";
        document.getElementById("tempsMyriam").innerHTML = Math.round(tempsMyriam*100)/100 + "h";
        document.getElementById("tempsAntoine").innerHTML = Math.round(tempsAntoine*100)/100 + "h";
        document.getElementById("tempsKhadidja").innerHTML = Math.round(tempsKhadidja*100)/100 + "h";
    }, 2000)
}

function result(res, enCours) {
    var price = 0
    for(let i = 0; i < res.data.length; i++) {
        var time = convertMS(res.data[i].time)
        switch(res.data[i].user.id) {
            case 6833952 :
                price += 37.50 * time
                tempsAlexF += time
                console.log(enCours)
                document.getElementById("tasksAlexF").innerHTML += "<li>"+enCours.name+" : "+time+"h"+"</li>";
                break
            case 4594745 :
                price += 62.50 * time
                tempsArmand += time
                document.getElementById("tasksArmand").innerHTML += "<li>"+enCours.name+" : "+time+"h"+"</li>";
                break
            case 6615132 :
                price += 50 * time
                tempsQuentin += time
                document.getElementById("tasksQuentin").innerHTML += "<li>"+enCours.name+" : "+time+"h"+"</li>";
                break
            case 4594746 :
                price += 37.50 * time
                tempsColinC += time
                document.getElementById("tasksColinC").innerHTML += "<li>"+enCours.name+" : "+time+"h"+"</li>";
                break
            case 6615133 :
                price += 50 * time
                tempsSouhail += time
                document.getElementById("tasksSouhail").innerHTML += "<li>"+enCours.name+" : "+time+"h"+"</li>";
                break
            case 6833951 :
                price += 37.50 * time
                tempsJulien += time
                document.getElementById("tasksJulien").innerHTML += "<li>"+enCours.name+" : "+time+"h"+"</li>";
                break
            case 4596253 :
                price += 37.50 * time
                tempsSteven += time
                document.getElementById("tasksSteven").innerHTML += "<li>"+enCours.name+" : "+time+"h"+"</li>";
                break
            case 4594734 :
                price += 50 * time
                tempsColinL += time
                document.getElementById("tasksColinL").innerHTML += "<li>"+enCours.name+" : "+time+"h"+"</li>";
                break
            case 2679874 :
                price += 37.50 * time
                tempsAlexC += time
                document.getElementById("tasksAlexC").innerHTML += "<li>"+enCours.name+" : "+time+"h"+"</li>";
                break
            case 6833946 :
                price += 37.50 * time
                tempsMyriam += time
                document.getElementById("tasksMyriam").innerHTML += "<li>"+enCours.name+" : "+time+"h"+"</li>";
                break
            case 6833949 :
                price += 50 * time
                tempsAntoine += time
                document.getElementById("tasksAntoine").innerHTML += "<li>"+enCours.name+" : "+time+"h"+"</li>";
                break
            case 6833945 :
                price += 50 * time
                tempsKhadidja += time
                document.getElementById("tasksKhadidja").innerHTML += "<li>"+enCours.name+" : "+time+"h"+"</li>";
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
    return time = Math.round((milliseconds / 1000 / 60 / 60)*100)/100;
}

function coutTache() { //Affichage du graphique
    var res = 0
    for(let i = 0; i < prix.length; i++) {
        res += prix[i];
    }
    document.getElementById("prixSprint").innerHTML = res + '€'; 
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

function counter() {
    if(seconds < 60) {
        document.getElementById("counter").innerHTML = seconds + " secondes";
    }
    if (seconds > 0) {
        seconds--;
    } else {
        clearInterval(timer);
    }
}