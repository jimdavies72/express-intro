const router = require("express").Router();

router.get("/", (req, res) => {
  //remove all query parameters [keys] that begin with "_"
  let queries = {};
  for (const [key, value] of Object.entries(req.query)) {
    if (key.startsWith("_")) {
      continue;
    } else {
      queries[key] = value;
    }
  }

  res.status(200).json({ query: queries });
});

module.exports = router;
