let url = "";

fetch(url, {
  body: JSON.stringify(data),
  headers: { Authorization: "JWT TOKEN" },
  method: "GET", //"POST"
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    //bekommt die Antwort des Servers
  });
