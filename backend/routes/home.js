const express = require("express");
const router = express.Router();
const Axios = require("axios");
require("dotenv").config();
const projectID = process.env.PROJECT_ID;
const projectKey = process.env.PROJECT_KEY;
const username = process.env.USERNAME;
const password = process.env.PASSWORD;
const homeController = require("../controller/homeController");

router
  .route("/")
  .get(async (req, res) => {
    try {
      const response = await Axios.get("https://api.chatengine.io/chats/", {
        headers: {
          "Project-ID": projectID, 
          "User-Name": username,
          "User-Secret": password,
        },
      });
      res.json(response.data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "An error occurred" });
    }
  })
  .post(async (req, res) => {
    const { username } = req.body;

    try {
      const response = await Axios.post("https://api.chatengine.io/users/", null, {
        headers: {
          "private-key": projectKey, 
        },
        data: {
          username: username,
          secret: username,
          first_name: username,
        },
      });

      res.status(response.status).json(response.data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "An error occurred" });
    }
  });

router.route("/create").post(async (req, res) => {
  try {
    const response = await Axios.post(`https://api.chatengine.io/chats/${projectID}/people/`);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});

router.route("/sub").post(async (req, res) => {
  try {
    const response = await Axios.post("https://api.chatengine.io/users/", null, {
      headers: {
        "PRIVATE-KEY": projectID, 
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});

router.route("/search").get(homeController.TopArtists).post(homeController.getUserToken)
router.route("/testing").get(homeController.Personal)
router.route("/create").get(homeController.userProfileData).post(homeController.saveData)

module.exports = router;
