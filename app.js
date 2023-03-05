const express = require("express");
const debug = require("debug")("app");
const morgan = require("morgan");
const path = require("path");
const genericRouter = express.Router();

const app = express();
const PORT = process.env.PORT;

app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, "/public/")));

app.set("views", "./src/views");
app.set("view engine", "ejs");

genericRouter.route("/").get((req, res) => {
  res.render("generics");
});

genericRouter.route("/1").get((req, res) => {
  res.send("Hellow world!! 11");
});

app.use("/generics", genericRouter);

app.get("/", (req, res) => {
  res.render("index", {
    username: "NongDew",
    customers: ["Jedsadaporn", "John", "Jane"],
  });
});

app.listen(PORT, () => {
  debug(`Example app listening at http://localhost:${PORT}`);
});
