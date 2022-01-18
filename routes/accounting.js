const router = require("express").Router();
const getRandomInt = require("../src/tools");
const catNames = require("cat-names");

router.get("/", (req, res) => {
  res.status(200).send("Accounting Route");
});

router.get("/staff/:name", (req, res) => {
  const jsonObj = {
    name: req.params.name,
    age: getRandomInt(18, 65),
    grade: "Acc",
    manager: catNames.random(),
  };

  res.status(200).json({ [req.params.name]: jsonObj });
});

router.get("/:name", (req, res) => {
  //console.log(req.params);
  res.status(200).json({ name: req.params.name });
});

module.exports = router;
