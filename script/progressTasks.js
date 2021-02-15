// Variables
var taches = []
var progress = []
var calcul = 0
var res = 0

export default function progressTasks(tasks, size, sprint) {
    for (let i=0; i<size;i++) {
      if(tasks[i].parent == null) {
        switch(sprint) {
          case 1 :
            progress.push(tasks[i].custom_fields[3].value.percent_complete)
            break
          case 2 :
            progress.push(tasks[i].custom_fields[4].value.percent_complete)
            break
      }
        taches.push(tasks[i].name)
      }
    }
    for(let i=0; i<progress.length; i++) {
        calcul += progress[i] 
    }
    res = calcul/progress.length/100
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
    from: { color: '#EE771B', width: 6 },
    to: { color: '#333', width: 6 },
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