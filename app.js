const express = require("express");
const debug = require("debug")("app");
const morgan = require("morgan");
const path = require("path");
const genericRouter = express.Router();
const elementRouter = express.Router();


const app = express();
const PORT = process.env.PORT;

app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, "/public/")));

app.set("views", "./src/views");
app.set("view engine", "ejs");

genericRouter.route("/").get((req, res) => {
  res.render("generics");
});

elementRouter.route("/").get((req, res) => {
  res.render("elements");
});

app.use("/generics", genericRouter);

app.use("/elements", elementRouter);

app.get("/", (req, res) => {
  res.render("index", {
    username: "NongDew",
    customers: ["Jedsadaporn", "John", "Jane"],
  });
});

app.listen(PORT, () => {
  debug(`Example app listening at http://localhost:${PORT}`);
});
