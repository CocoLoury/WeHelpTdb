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
            <a class="nav-link" href="sprint2.php">Sprint 2</a>
            <a class="nav-link" href="sprint3.php">Sprint 3</a>
            <a class="nav-link" href="sprint4.php">Sprint 4</a>
            <a class="nav-link" href="equipe.php">Equipe</a>
            <a class="nav-link active" href="vuedensemble.php">Vue d'ensemble</a>
          </div>
        </div>
      </div>
    </nav>
    <br/>
    <div style="display: flex; flex-wrap:wrap; justify-content: center;">
      <div class="card prixSprint">
          <div class="card-body ecart">
              <p class="prix" id="prixSprint1">0€</p>
              <p class="sprint">Sprint 1</p>
          </div>
      </div>
      <div class="card prixSprint">
          <div class="card-body ecart">
              <p class="prix" id="prixSprint2">0€</p>
              <p class="sprint">Sprint 2</p>
          </div>
      </div>
      <div class="card prixSprint">
          <div class="card-body ecart">
              <p class="prix" id="prixSprint3">0€</p>
              <p class="sprint">Sprint 3</p>
          </div>
      </div>
      <div class="card prixSprint">
          <div class="card-body ecart">
              <p class="prix" id="prixSprint4">0€</p>
              <p class="sprint">Sprint 4</p>
          </div>
      </div>
      <div class="card" style="width: 83%;">
          <div class="card-body ecart" style="text-align: center;">
              <p class="prix" id="prixProjet">0€</p>
              <p class="sprint">Projet</p>
          </div>
      </div>
      <div class="card" style="width: 42%;">
        <div class="card-body">
          <canvas id="progressTask" width="200px" height="100px"></canvas>
        </div>
      </div>
      <div class="card">
      <div class="card-header" style="display: flex; align-items:center;">
              <h5 class="col-9">Avancement total</h5>
            </div>
            <div class="card-body" style="position: relative;">
              <div id="progress"></div>
            </div>
      </div>
    </div>
  </body>
  <script src="./script/vuedensemble.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
</html>