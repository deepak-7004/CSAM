const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3001;
const { Storage } = require("@google-cloud/storage");
app.use(cors());
const storage = new Storage();
// let dbConfig = {
//   /* Notice! These are here for demo purposes. DO NOT COMMIT YOUR INFO to version control*/
//   client: "mysql",
//   connection: {
//     user: "testuser",
//     password: "testuserpwd1",
//     database: "gae-demo-db",
//   },
// };

const db = require("./models");

db.sequelize
  .sync()
  .then(() => {
    console.log("Databsase is connected");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

// if (process.env.NODE_ENV == "production") {
//   dbConfig.connection.socketPath = process.env.GAE_DB_ADDRESS;
// } else {
//   dbConfig.connection.host = "127.0.0.1";
// }

// const knex = require("knex")(dbConfig);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/db-demo", async (req, res) => {
  const result = await knex.select().table("exampletable");
  res.json(result);
});

app.get("/api/file/:fileName", (req, res) => {
  const bucketName = "abi-ghq-01190-cybersecurity.appspot.com";
  const fileName = req.params.fileName;
  const bucket = storage.bucket(bucketName);

  const file = bucket.file(`assets/public/${fileName}`);
  file.exists((err, exists) => {
    if (err) {
      console.error("Error checking file existence:", err);
      res.status(500).send("Error checking file existence");
    } else if (!exists) {
      console.error("File does not exist");
      res.status(404).send("File not found");
    } else {
      const fileStream = file.createReadStream();
      fileStream.on("error", (err) => {
        console.error("Error reading file:", err);
        res.status(500).send("Error reading file");
      });
      console.log("fileStream", res);
      fileStream.pipe(res);
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
