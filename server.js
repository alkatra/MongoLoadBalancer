const express = require("express");
const mongoose = require("mongoose");
const MONGO = "mongodb://admin:admin@3.90.3.158:27017";
const Sensor = require("./models/sensor");

const app = express();
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

const port = 3000;

app.get("/", (req, res) => {
  res.status(200).send("This API accepts POST only. Ping Successful.");
});

app.post("/", (req, res) => {
  res.status(200).send("Received: " + req.body);
  var connection = mongoose.createConnection(MONGO);
  let model = connection.model("Sensor", Sensor.schema);
  new model(req.body).save().then(
    (doc) => {
      connection.close();
      res.status(200).send("Success");
    },
    (err) => {
      res.status(400).send("Error: " + err);
    }
  );
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
