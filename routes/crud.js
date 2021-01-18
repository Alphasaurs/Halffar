const router = require("express").Router();

router.post("/create", (req, res) => {
  console.log("Adding your task");
});

router.get("/read", (req, res) => {
  console.log("Showing your task");
});

router.get("/update", (req, res) => {
  console.log("Updating your task");
});

router.get("/delete", (req, res) => {
  console.log("deleting your task");
});

module.exports = router;
