var express = require("express");
var app = express();
var date = new Date();


// Creating our own middelwares function like morgan
app.use((req, res, next) => {
  console.log(req.method + req.url + date.getMilliseconds());
  next();
});

//Custom Middelware like the json()
app.use(ownjson);

// custom middelware like the json
function ownjson(req, res, next) {
  let store = "";
  req.on("data", (chunk) => {
    store += chunk;
  });
  req.on("end", () => {
    req.body = store;
    console.log(req.body);
  });
  next();
}
// custom middelware like the static
app.use(customStatic);
function customStatic(req, res, next) {
  if (req.url.split(".").pop() === "css") {
    const cssFile = req.url;
    req.sendFile(__dirname + "/public/" + cssFile);
  }
  if (req.method === "GET" && req.url.split(".").pop() === "jpg") {
    const imageUrl = req.url;
    req.send(__dirname + "/public/" + req.url);
  }
  next();
}

app.listen(4000, () => {
  console.log("server is listening  on the port 4k");
});