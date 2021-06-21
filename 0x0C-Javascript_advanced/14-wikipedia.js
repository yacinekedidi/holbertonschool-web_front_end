function createElement(data) {
  const paragraph = document.createElement("p");
  paragraph.textContent = data;
  document.body.append(paragraph);
}

function queryWikipedia(callback) {
  const request = new XMLHttpRequest();
  request.addEventListener("load", function () {
    callback(request.responseText);
  });
  request.open(
    "GET",
    "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*"
  );
  request.send();
}

queryWikipedia(createElement);
