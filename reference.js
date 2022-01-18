// app.get("/", (req, res) => {
//   res.status(200).send("Hello world");
// });

// app.get("/", (req, res) => {

//   res.status(200).json({ query: req.query });
//   //console.log(req.query);
// });

// app.get("/", (req, res) => {
//   //remove all query parameters [keys] that begin with "_"
//   let queries = {};
//   for (const [key, value] of Object.entries(req.query)) {
//     if (key.startsWith("_")) {
//       continue;
//     } else {
//       queries[key] = value;
//     }
//   }

// app.get("/marketing", (req, res) => {
//   res.status(200).send("Marketing Route");
// });

// app.get("/goodbye", (req, res) => {
//   res.status(200).send("Goodbye Route");
// });

//   res.status(200).json({ query: queries });
//   //console.log(req.query);
// });

// app.get("/data", (req, res) => {
//   res.status(200).json({ msg: "Hello JSON" });
// });

// app.get("*", (req, res) => {
//   res.status(404).send("Not Found");
// });
