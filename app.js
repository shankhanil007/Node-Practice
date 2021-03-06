const express = require("express");
const app = express();


app.use(express.json());
app.use(express.static("public"));
app.set('view engine','ejs');


app.get("/", (req, res) => {

  res.render("home");
});

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Server Has Started!!");
});