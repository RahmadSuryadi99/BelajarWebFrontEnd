document.addEventListener("DOMContentLoaded", function () {
  var btnText = document.querySelector("#text");
  btnText.addEventListener("click", function () {
    var request = new XMLHttpRequest();
    // request.open("method","url",false (type:asyn/sync))
    request.open("GET", "http://127.0.0.1:5500/HTML_CSS/hello.txt", false);
    request.send();
    console.log(request);
    console.log(request.responseText);
  });
});

var request = new XMLHttpRequest();
// request.open("method","url",false (type:asyn/sync))
request.open("GET", "http://127.0.0.1:5500/HTML_CSS/hello.txt", false);
request.send();

console.log(request.readyState);
console.log("resTex",request.responseText);
console.log("res",request.response);

var request = new XMLHttpRequest();
// request.open("method","url",false (type:asyn/sync))
//async
request.open("GET", "http://127.0.0.1:5500/HTML_CSS/hello.txt", true);
request.send();
request.onreadystatechange = function () {
  if (
    request.status >= 200 &&
    request.status <= 204 &&
    request.readyState ===4
  ) {
    console.log( request.responseText);
  } else {
    console.log(
      `belum selesai request sedang berjalan, 
      readystate : ${request.readyState}, status :${request.status}, statusText : ${request.statusText}`
    );
  }
};

