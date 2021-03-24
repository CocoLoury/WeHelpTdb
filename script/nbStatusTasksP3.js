// Variables
var stat=[]
var a = 0;
var b = 0;
var c = 0; 
var d = 0;
var e = 0;
var f = 0;
var g = 0;
var h = 0;
var res = []

export default function nbStatusTasks(tasks, size) {
    for (let i=0; i<size;i++){
        if(tasks[i].parent == null) {
            stat.push(tasks[i].status.status)
        }
    }
    for (let j=0; j<stat.length;j++) {
        if(stat[j] == "done") {
            a += 1
        }
        if(stat[j] == "retour test") {
            b += 1
        }
        if(stat[j] == "test") {
            c += 1
        }
        if(stat[j] == "intégration") {
            d += 1
        }
        if(stat[j] == "contrôle qualité") {
            e += 1
        }
        if(stat[j] == "in progress") {
            f += 1
        }
        if(stat[j] == "gestion de projet") {
            g += 1
        }
        if(stat[j] == "to do") {
            h += 1
        }
    }
    res.push(a)
    res.push(b)
    res.push(c)
    res.push(d)
    res.push(e)
    res.push(f)
    res.push(g)
    res.push(h)
    // Charts
    var ctx = document.getElementById('nbStatusTasks').getContext('2d');
    var myPieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: [
                "Done",
                "Retour test",
                "Test",
                "Intégration",
                "Contrôle qualité",
                "In progress",
                "Gestion de projet",
                "To Do"
            ],
            datasets: [{
                data: res,
                backgroundColor: [
                    "#06D6A0",
                    "#6a040f",
                    "#e85d04",
                    "#ff477e",
                    "#25a18e",
                    "#044180",
                    "#ffff3f",
                    "#adb5bd"
                    
                ],
                label: 'My dataset'
            }],
        },
        options: {
        }
    });
}