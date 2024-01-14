const express = require("express");
const app = express();
const body_parser = require("body-parser");
const main = require("./controller/main");
const {
  Login,
  Account,
  Password,
  Accountfind,
  DeleteAccount,
} = require("./controller/login");
const mailing = require("./controller/mail");
const { message, Mails } = require("./controller/message");
const { All, Result,key } = require("./controller/search");
const port = 5001;
const cors = require("cors");
app.use(express.json());
app.use(body_parser.urlencoded({ extended: true }));
app.use(cors());
app.get("/", (req, res) => res.send("How can I Help You"));
app.get("/searchingResult", Result);
app.post("/createUser", main);
app.post("/message", message);
app.post("/Account", Account);
app.post("/Access",key)
app.post("/DeleteAccount", DeleteAccount);
app.post("/Password", Password);
app.post("/Accountfind", Accountfind);
app.post("/login", Login);
app.get("/mails", Mails);
app.post("/mail", mailing);
app.get("/All", All);
app.listen(port, () => console.log("port is running in", port));
