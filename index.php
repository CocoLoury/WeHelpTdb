<!doctype html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
    <link href="./style.css" rel="stylesheet">
    <script src=".\node_modules\chart.js\dist\Chart.min.js"></script>
    <title>Dashboard</title>
  </head>
  <body>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="index.php">Dashboard</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active" aria-current="page" href="index.php">P3 cadrage</a>
            <a class="nav-link" href="sprint1.php">Sprint 1</a>
            <a class="nav-link" href="sprint2.php">Sprint 2</a>
            <a class="nav-link" href="sprint3.php">Sprint 3</a>
            <a class="nav-link" href="sprint4.php">Sprint 4</a>
          </div>
        </div>
      </div>
    </nav>
    <br/>
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-6 col-md-12">
          <div class="card">
            <h5 class="card-header">Temps par tâches</h5>
            <div class="card-body">
              <canvas id="timePerTask" width="200px" height="100px"></canvas>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-12">
          <div class="card">
              <h5 class="card-header">Nombre de tâches par status</h5>
              <div class="card-body">
                <canvas id="nbStatusTasks" width="200px" height="100px"></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
  <script type="module" src="./script/request.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
</html>