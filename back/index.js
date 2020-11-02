const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");

app.use(cors());

const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;

const user = "root";
const pwd = "rootroot";
//const host = "localhost"
const host = "mongodb";
const db_port = "27017";

const mongo = `mongodb://${user}:${pwd}@${host}:${db_port}`;

MongoClient.connect(mongo, { useUnifiedTopology: true })
  .then((client) => {
    console.log("Connected to Database");

    const db = client.db("bipi");
    const cars = db.collection("cars");

    app.get("/cars", async (_, res) => {
      await cars
        .find()
        .toArray()
        .then((data) => {
          res.send(data);
        });
    });

    app.get("/cars/:id", async (req, res) => {
      const params = req.params;
      const id = params.id;
      try {
        await cars
          .find({ _id: ObjectId(id) })
          .toArray()
          .then((data) => {
            res.status(200).send(data[0]);
          })
          .catch((err) => {
            res.status(400).send({ code: "400", message: `${err}` });
          });
      } catch (err) {
        res.status(400).send({ code: "400", message: `${err}` });
      }
    });

    app.listen(port, () => {
      console.log(`Listening at http://localhost:${port}`);
    });
  })
  .catch((error) => console.error(error));
