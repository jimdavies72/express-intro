require("dotenv").config();

const express = require("express");
const app = express();

const indexRouter = require("./routes/index");
const accountingRouter = require("./routes/accounting");
const marketingRouter = require("./routes/marketing");
const dataRouter = require("./routes/data");
const errorRouter = require("./routes/error");

app.use("/", indexRouter);
app.use("/accounting", accountingRouter);
app.use("/marketing", marketingRouter);
app.use("/data", dataRouter);
app.use("*", errorRouter);

app.listen(process.env.HTTP_PORT, () => {
  console.log("App online");
});
