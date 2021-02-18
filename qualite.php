<!doctype html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
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
            <a class="nav-link active" href="qualite.php">Qualité</a>
            <a class="nav-link" href="equipe.php">Equipe</a>
            <a class="nav-link" href="vuedensemble.php">Vue d'ensemble</a>
          </div>
        </div>
      </div>
    </nav>
    <br/>
    <div style="display: flex; flex-wrap:wrap; justify-content: center;">
        <div class="card">
            <div class="card-body">
                <h2 id="qualiteNomSprint">Sprint 1</h2>
                <ul>
                    <li>
                        <div id="liste" class="row">
                            <div id="NomTache" class="col-8">
                                Créer la map : 
                            </div>
                            <div id="qualiteTache" class="col-4">
                                <strong>N/A</strong>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div id="liste" class="row">
                            <div id="NomTache" class="col-8">
                                Inscription : 
                            </div>
                            <div id="qualiteTache" class="col-4">
                                <strong>100%</strong>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div id="liste" class="row">
                            <div id="NomTache" class="col-8">
                                Déconnexion : 
                            </div>
                            <div id="qualiteTache" class="col-4">
                                <strong>100%</strong>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div id="liste" class="row">
                            <div id="NomTache" class="col-8">
                                Barre de navigation : 
                            </div>
                            <div id="qualiteTache" class="col-4">
                                <strong>N/A</strong>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div id="liste" class="row">
                            <div id="NomTache" class="col-8">
                                Connexion : 
                            </div>
                            <div id="qualiteTache" class="col-4">
                                <strong>100%</strong>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div id="liste" class="row">
                            <div id="NomTache" class="col-8">
                                Connexion admin : 
                            </div>
                            <div id="qualiteTache" class="col-4">
                                <strong>100%</strong>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div id="liste" class="row">
                            <div id="NomTache" class="col-8">
                                Afficher les SZ : 
                            </div>
                            <div id="qualiteTache" class="col-4">
                                <strong>100%</strong>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div id="liste" class="row">
                            <div id="NomTache" class="col-8">
                                MDP oublié : 
                            </div>
                            <div id="qualiteTache" class="col-4">
                                <strong>100%</strong>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div id="liste" class="row">
                            <div id="NomTache" class="col-8">
                                Voir les infos de la SafeZone au clic : 
                            </div>
                            <div id="qualiteTache" class="col-4">
                                <strong>100%</strong>
                            </div>
                        </div>
                    </li>
                </ul>
                <div id="totalQualite" class="row">
                    <div id="NomTache" class="col-8">
                        Total sprint 1 : 
                    </div>
                    <div id="qualiteTache" class="col-4">
                        <strong>100%</strong>
                    </div>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-body">
            <h2 id="qualiteNomSprint">Sprint 2</h2>
                <ul>
                    <li>
                        <div id="liste" class="row">
                            <div id="NomTache" class="col-8">
                                Recevoir une alerte particulier : 
                            </div>
                            <div id="qualiteTache" class="col-4">
                                <strong>N/A</strong>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div id="liste" class="row">
                            <div id="NomTache" class="col-8">
                                Filtrer les SafeZones : 
                            </div>
                            <div id="qualiteTache" class="col-4">
                                <strong>N/A</strong>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div id="liste" class="row">
                            <div id="NomTache" class="col-8">
                                Créer une alerte : 
                            </div>
                            <div id="qualiteTache" class="col-4">
                                <strong>N/A</strong>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div id="liste" class="row">
                            <div id="NomTache" class="col-8">
                                Choisir une Safe Zone : 
                            </div>
                            <div id="qualiteTache" class="col-4">
                                <strong>N/A</strong>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div id="liste" class="row">
                            <div id="NomTache" class="col-8">
                                Résoudre l'alerte : 
                            </div>
                            <div id="qualiteTache" class="col-4">
                                <strong>N/A</strong>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div id="liste" class="row">
                            <div id="NomTache" class="col-8">
                                Rappel de fin d'alerte : 
                            </div>
                            <div id="qualiteTache" class="col-4">
                                <strong>N/A</strong>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div id="liste" class="row">
                            <div id="NomTache" class="col-8">
                                Voir les infos d'une alerte sur la map : 
                            </div>
                            <div id="qualiteTache" class="col-4">
                                <strong>N/A</strong>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div id="liste" class="row">
                            <div id="NomTache" class="col-8">
                                Afficher les alertes : 
                            </div>
                            <div id="qualiteTache" class="col-4">
                                <strong>N/A</strong>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div id="liste" class="row">
                            <div id="NomTache" class="col-8">
                                Consulter un profil : 
                            </div>
                            <div id="qualiteTache" class="col-4">
                                <strong>N/A</strong>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div id="liste" class="row">
                            <div id="NomTache" class="col-8">
                                Valider la participation à une demande/offre : 
                            </div>
                            <div id="qualiteTache" class="col-4">
                                <strong>N/A</strong>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div id="liste" class="row">
                            <div id="NomTache" class="col-8">
                                Chatter avec les utilisateurs : 
                            </div>
                            <div id="qualiteTache" class="col-4">
                                <strong>N/A</strong>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div id="liste" class="row">
                            <div id="NomTache" class="col-8">
                                Créer une demande de service : 
                            </div>
                            <div id="qualiteTache" class="col-4">
                                <strong>N/A</strong>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div id="liste" class="row">
                            <div id="NomTache" class="col-8">
                                Envoyer un mail de confirmation de création de demande de service : 
                            </div>
                            <div id="qualiteTache" class="col-4">
                                <strong>N/A</strong>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div id="liste" class="row">
                            <div id="NomTache" class="col-8">
                                Créer une proposition de service : 
                            </div>
                            <div id="qualiteTache" class="col-4">
                                <strong>N/A</strong>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div id="liste" class="row">
                            <div id="NomTache" class="col-8">
                                Modifier une offre/demande : 
                            </div>
                            <div id="qualiteTache" class="col-4">
                                <strong>N/A</strong>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div id="liste" class="row">
                            <div id="NomTache" class="col-8">
                                Demande de participation au service : 
                            </div>
                            <div id="qualiteTache" class="col-4">
                                <strong>N/A</strong>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div id="liste" class="row">
                            <div id="NomTache" class="col-8">
                                Envoyer un mail de confirmation de participation à une demande service : 
                            </div>
                            <div id="qualiteTache" class="col-4">
                                <strong>N/A</strong>
                            </div>
                        </div>
                    </li>
                </ul>
                <div id="totalQualite" class="row">
                    <div id="NomTache" class="col-8">
                        Total sprint 2 : 
                    </div>
                    <div id="qualiteTache" class="col-4">
                        <strong>N/A</strong>
                    </div>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-body">
            <h2 id="qualiteNomSprint">Sprint 3</h2>
            </div>
        </div>
        <div class="card">
            <div class="card-body">
            <h2 id="qualiteNomSprint">Sprint 4</h2>
            </div>
        </div>
    </div>
  </body>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
</html>