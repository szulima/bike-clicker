const express = require("express");
const fs = require("fs");
let db = require("./db.json");

const app = express();

app.use(express.json());

app.post("/save", (req, res) => {
  const new_save = req.body;
  const does_save_exist = db.some((save) => save.id === new_save.id);
  let new_db;
  if (!does_save_exist) {
    new_db = [...db, new_save];
  } else {
    const index = db.findIndex((save) => save.id === new_save.id);
    new_db = [...db.slice(0, index), new_save, ...db.slice(index + 1)];
  }
  fs.writeFile("./db.json", JSON.stringify(new_db), (err) => {
    console.error(err);
    return res.send("Something went wrong");
  });
  res.status(200).send("Your save has been updated");
});

app.set("port", 3001);
const server = app.listen(app.get("port"), () =>
  console.log(`Server is listening to port ${server.address().port}`)
);
