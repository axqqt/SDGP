const express = require("express");
const router = express.Router();
const Axios = require("axios");
require("dotenv").config();


router.route("/").get(async (req, res) => {
  res.json({Alert:"Tensor Flow Route"})
});

module.exports = router;


