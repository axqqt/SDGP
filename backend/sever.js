const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;
const cluster = process.env.CLUSTER;
const cors = require("cors");
const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
const home = require("./routes/home");
const projectID = process.env.projectID;
const projectKey = process.env.projectKey;
const Axios = require("axios");
const tensor = require("./routes/tensor");


app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
if (!fs.existsSync(path.join(__dirname, "public"))) {
  fs.mkdirSync(path.join(__dirname, "public"));
}
app.use(express.static(path.join(__dirname, "public")));
app.use("/home", home);
app.use("/ai",tensor);
if (!fs.existsSync(path.join(__dirname, "public"))) {
  fs.mkdirSync(path.join(__dirname, "public"));
}
app.use(express.static(path.join(__dirname, "public")));

app.post("/newuser", async (req, res) => {
  const { username } = req.params;

  try {
    const r = await Axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "Private-Key": `${projectKey}` } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.json(e);
  }
});

app.post("/subi", async (req, res) => {
  const { username } = req.params;
  return res.json({ username: username, secret: "sha256..." });
});

app.post("/tensor", async (req,res)=>{
  try{
    
  }catch(error){
    console.error(error);
  }
})

app.use("*", (req, res) => {
  res.status(404);

  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "404.html"));
  } else if (req.accepts("json")) {
    res.sendStatus(404).json({ Alert: "404 Error" });
  } else {
    res.type("txt").send("404 not found");
  }
});

async function start() {
  await mongoose.connect(cluster, { useNewUrlParser: true });

  try {
    app.listen(port, () => {
      console.log(`Server is up on port ${port}`);
    });
  } catch (error) {
    console.error(error);
  }
}

start();
