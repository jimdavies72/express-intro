const router = require("express").Router();
const getRandomInt = require("../src/tools");
const catNames = require("cat-names");

let staff = [
  { name: "bob", age: 34 },
  { name: "sally", age: 45 },
  { name: "Jo", age: 24 },
];

//Get all members of staff
router.get("/", (req, res) =>
  res.status(200).json(
    staff.map((member, i) => {
      member.id = i + 1;
      return member;
    })
  )
);

// Create a new member of staff
router.post("/", (req, res) => {
  //console.log(req.body);
  staff.push(req.body);
  res.status(201).json({ msg: "Created", data: req.body });
});

// Delete all members of staff
router.delete("/", (req, res) => {
  staff = [];
  res.status(201).json({ msg: "Deleted all staff", data: staff });
});

//Get an individual member of staff
router.get("/:id", (req, res) => {
  if (req.params.id - 1 < 0 || req.params.id > staff.length) {
    res.status(404).json({ msg: `${req.params.id} not found` });
  } else {
    res.status(200).json(staff[req.params.id - 1]);
  }
});

//delete an individual member of staff
router.delete("/:id", (req, res) => {
  const removed = staff.splice(req.params.id - 1, 1);
  res.status(200).json({ msg: `Deleted ${req.params.id}`, data: removed });
});

// Update an individual member of staff
router.put("/:id", (req, res) => {
  staff[req.params.id - 1] = req.body;
  res.status(200).json({ msg: `Updated ${req.params.id}`, data: req.body });
});

module.exports = router;
