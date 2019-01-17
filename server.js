import express from "express";

const app = express();

app.use("/static", express.static("static"));
app.set("view engine", "hbs");

app.get("/", function(req, res) {
  res.render("index");
});

const port = process.env.PORT || 8080;
app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("listening on port " + port);
  }
});
