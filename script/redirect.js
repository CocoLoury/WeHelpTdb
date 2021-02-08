// Requêtes

var paramet = location.search
code = paramet.substring(1, paramet.length)
console.log(code)

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://api.clickup.com/api/v2/oauth/token?client_id=0F7Q1WCJ0XCE24AGHWVU3R6Q5RJ0JPZQ&client_secret=UTZV6HUMS8BF8E246R9YXYTD8M1AU0M0WJNWSQ9MUUI18ZZU8WMFNC1JD1PRWKLB&"+code+"");

xhr.send();