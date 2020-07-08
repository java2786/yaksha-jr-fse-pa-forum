const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require("./src/routes");

var fs = require('fs');

app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.use("/", express.static("public"));


// http://localhost:3000/forum/
app.use("/forum", routes);



fs.readFile('./src/config/server.json', 'utf8', function (err, data) {
  if (err) throw err;
  let serverConf = JSON.parse(data);
  console.log(serverConf);

  app.listen(serverConf.port, serverConf.host, function(err){
    if (err) throw err;
    console.log(`Server is running at ${serverConf.host}:${serverConf.port}`);
  })
});