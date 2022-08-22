const url = "http://BalanceLoad-762648802.us-east-1.elb.amazonaws.com:3000/";
const axios = require("axios");
setInterval(publishReading, 50); //time is in ms

function publishReading() {
  // Temperature simulation range: 20-25
  let temperature = 20 + Math.floor(Math.random() * 5);
  let body = {
    id: 0,
    time: Date.now(),
    temperature: temperature,
    location: "Bedroom",
  };
  axios.post(url, body).then(
    (res) => {
      if (res.status == 200) console.log("Success");
    },
    (err) => {
      console.log(err);
    }
  );
}
