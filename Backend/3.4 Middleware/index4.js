import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var bandName = ""
function bandNameCoverter(req, res, next){
  console.log(req.body);
  bandName = req.body["street"] + req.body["pet"];
  next();
}
app.use(bodyParser.urlencoded({extended: true}));
app.use(bandNameCoverter);


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  res.send(`<h1>Your Band name is:</h1> ${bandName}.`);
})


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
