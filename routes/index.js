const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
	res.setHeader("Access-Control-Allow-Origin", "www.eventbriteapi.com");
	res.render("index", { title: "Andy Lincoln & Sarah Croughwell" });
});

module.exports = router;
