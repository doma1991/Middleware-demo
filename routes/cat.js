const express = require("express");
const catsController = require("../controllers/cats")
const moreCatsController = require("../controllers/moreCats")
const router = express.Router();

router.get("/", catsController);
router.post("/", moreCatsController)

module.exports = router;