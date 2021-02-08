// Requêtes
var request = new XMLHttpRequest();

var paramet = location.search
code = paramet.substring(1, paramet.length)
console.log(code)

request.open('POST', 'https://api.clickup.com/api/v2/oauth/token?client_id=UISTJI1IMFB9G7V4COHU8YG1NFAOAOOZ&client_secret=80JIR46IFRDGVT8BD25XKW9P3EU0SFJJZYCRFH6EFE7RW70C9K9BNXEKU4W4B0RX&'+code);
request.setRequestHeader('Content-Type', 'application/json');
request.onreadystatechange = function () {
    if (this.readyState === 4) {
      console.log('Status:', this.status);
      console.log('Headers:', this.getAllResponseHeaders());
      console.log('Body:', this.responseText);
    }
  };

request.send();