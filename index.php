<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://api.clickup.com/api/v2/oauth/token?client_id=UISTJI1IMFB9G7V4COHU8YG1NFAOAOOZ&client_secret=80JIR46IFRDGVT8BD25XKW9P3EU0SFJJZYCRFH6EFE7RW70C9K9BNXEKU4W4B0RX&code=".$_GET['code']);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_POST, TRUE);

$response = curl_exec($ch);
curl_close($ch);
var_dump($response);
?>
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
  </body>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
</html>

<script>
    var entier = <?= $response ?>;
    console.log(entier['access_token']);
    localStorage.setItem('access_token', entier['access_token']);
</script>