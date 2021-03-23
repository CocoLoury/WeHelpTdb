<!doctype html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
    <script src=".\node_modules\chart.js\dist\Chart.min.js"></script>
    <script src=".\node_modules\progressbar.js\dist\progressbar.min.js"></script>
    <link href="./style.css" rel="stylesheet">
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
            <a class="nav-link" aria-current="page" href="cadrage.php">P3 cadrage</a>
            <a class="nav-link" href="sprint1.php">Sprint 1</a>
            <a class="nav-link active" href="sprint2.php">Sprint 2</a>
            <a class="nav-link" href="sprint3.php">Sprint 3</a>
            <a class="nav-link" href="sprint4.php">Sprint 4</a>
            <a class="nav-link" href="qualite.php">Qualité</a>
            <a class="nav-link" href="equipe.php">Equipe</a>
            <a class="nav-link" href="vuedensemble.php">Vue d'ensemble</a>
          </div>
        </div>
      </div>
    </nav>
    <br/>
    <div class="alert alert-warning alert-dismissible fade show" id="alert" role="alert" style="display: none;">
        Trop de requêtes effectuées, données érronées, veuillez attendre <strong id="counter">1 minute</strong> et recharger la page
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    <div class="container-fluid" style="display: flex; flex-wrap:wrap">
      <div class="col-lg-5 col-md-6 col-sm-12">
        <div class="card" style="margin: 0.5rem;">
          <h5 class="card-header">Temps par tâches</h5>
          <div class="card-body">
            <canvas id="timePerTask" width="200px" height="100px"></canvas>
          </div>
        </div>
      </div>
      <div class="col-lg-5 col-md-6 col-sm-12">
        <div class="card" style="margin: 0.5rem;">
            <h5 class="card-header">Progression des tâches</h5>
            <div class="card-body">
              <canvas id="progressTasks" width="200px" height="100px"></canvas>
            </div>
        </div>
      </div>
      <div class="col-lg-2 col-md-4 col-sm-12">
        <div class="card" style="margin: 0.5rem;">
            <h5 class="card-header">Nombre de tâches par status</h5>
            <div class="card-body">
              <canvas id="nbStatusTasks" width="100px" height="130px"></canvas>
            </div>
        </div>
      </div>
      <div class="col-lg-5 col-md-6 col-sm-12">
        <div class="card" style="margin: 0.5rem;">
          <div class="card-header" style="display: flex; align-items:center;">
            <h5 class="col-9">Burndown Chart</h5>
          </div>
          <div class="card-body">
            <canvas id="burndowChart" width="200px" height="100px"></canvas>
          </div>
        </div>
      </div>
      <div class="col-lg-5 col-md-6 col-sm-12">
        <div class="card" style="margin: 0.5rem;">
          <div class="card-header" style="display: flex; align-items:center;">
            <h5 class="col-9">Coût par tâches</h5>
          </div>
          <div class="card-body">
            <canvas id="coutTache" width="200px" height="100px"></canvas>
          </div>
        </div>
      </div>
      <div class="col-lg-2 col-md-4 col-sm-12">
        <div class="card" style="margin: 0.5rem;">
            <div class="card-header" style="display: flex; align-items:center;">
              <h5 class="col-9">Coût total</h5>
            </div>
            <div class="card-body">
              <h1 style="color: white;" id="prixSprint">0€</h1>
            </div>
        </div>
        <div class="card" style="margin: 0.5rem;">
            <div class="card-header" style="display: flex; align-items:center;">
              <h5 class="col-9">Avancement total</h5>
            </div>
            <div class="card-body" style="position: relative;">
              <div id="progress"></div>
            </div>
        </div>
      </div>
    </div>
    <hr/>
    <div class="container-fluid">
      <p>Temps total / coûts d'Alexandre F : <b id="tempsAlexF">0</b></p>
      <p>Tâches d'Alexandre F : <ul id="tasksAlexF"></ul>
      <hr />
      <p>Temps total / coûts d'Armand : <b id="tempsArmand">0</b></p>
      <p>Tâches d'Armand : <ul id="tasksArmand"></ul>
      <hr />
      <p>Temps total / coûts de Quentin : <b id="tempsQuentin">0</b></p>
      <p>Tâches de Quentin : <ul id="tasksQuentin"></ul>
      <hr />
      <p>Temps total / coûts de Colin C : <b id="tempsColinC">0</b></p>
      <p>Tâches de Colin C : <ul id="tasksColinC"></ul>
      <hr />
      <p>Temps total / coûts de Souhail : <b id="tempsSouhail">0</b></p>
      <p>Tâches de Souhail : <ul id="tasksSouhail"></ul>
      <hr />
      <p>Temps total / coûts de Julien : <b id="tempsJulien">0</b></p>
      <p>Tâches de Julien : <ul id="tasksJulien"></ul>
      <hr />
      <p>Temps total / coûts de Steven : <b id="tempsSteven">0</b></p>
      <p>Tâches de Steven : <ul id="tasksSteven"></ul>
      <hr />
      <p>Temps total / coûts de Colin L : <b id="tempsColinL">0</b></p>
      <p>Tâches de Colin L : <ul id="tasksColinL"></ul>
      <hr />
      <p>Temps total / coûts d'Alexandre C : <b id="tempsAlexC">0</b></p>
      <p>Tâches d'Alexandre C : <ul id="tasksAlexC"></ul>
      <hr />
      <p>Temps total / coûts de Myriam : <b id="tempsMyriam">0</b></p>
      <p>Tâches de Myriam : <ul id="tasksMyriam"></ul>
      <hr />
      <p>Temps total / coûts d'Antoine : <b id="tempsAntoine">0</b></p>
      <p>Tâches d'Antoine : <ul id="tasksAntoine"></ul>
      <hr />
      <p>Temps total / coûts de Khadidja : <b id="tempsKhadidja">0</b></p>
      <p>Tâches de Khadidja : <ul id="tasksKhadidja"></ul>
    </div>
  </body>
  <script type="module" src="./script/requestSP2.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
</html>