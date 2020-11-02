const express = require("express");
const app = express();
const port = 8080;

const cors = require("cors");
app.use(cors());

let data = require("./.data.json");

app.get("/cars", (_, res) => {
  res.send(data);
});

app.get("/cars/:id", (req, res) => {
  const params = req.params;
  const id = params.id;
  if (data[id]) {
    res.status(200).send(data[id]);
  } else {
    res.status(400).send({ code: "400", message: `Id: ${id} not found` });
  }
});

app.get("/cars/:id/:property", (req, res) => {
  const params = req.params;
  const id = params.id;
  const property = params.property;
  if (data[params.id] && data[id][property]) {
    res.status(200).send(data[id][property]);
  } else {
    let message;
    if (!data[params.id]) message = `Id: ${id} not found`;
    else if (!data[id][property])
      message = `${property} not found for id ${id}`;
    res.status(400).send({ code: "400", message: message });
  }
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
