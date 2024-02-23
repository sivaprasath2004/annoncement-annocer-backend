const express = require("express");
const app = express();
const body_parser = require("body-parser");
const main = require("./controller/main");
const {
  Login,
  Account,
  Password,
  Accountfind,
  UserNameAccount,
  DeleteAccount,
  userChecking
} = require("./controller/login");
const mailing = require("./controller/mail");
const { message, Mails } = require("./controller/message");
const { All, Result,key,deleteUser_id,findUserMail } = require("./controller/search");
const port = 5001;
const cors = require("cors");
app.use(express.json());
app.use(body_parser.urlencoded({ extended: true }));
app.use(cors());
app.get("/", (req, res) => res.send("How can I Help You"));
app.get("/searchingResult", Result);
app.post("/createUser", main);
app.post("/userChecking",userChecking);
app.post("/message", message);
app.post("/Account", Account);
app.post("/Access",key)
app.post("/DeleteAccount", DeleteAccount);
app.post("/Password", Password);
app.post("/UserName",UserNameAccount);
app.post("/Accountfind", Accountfind);
app.post("/login", Login);
app.post("/UserAcoountRemove",deleteUser_id);
app.get("/mails", Mails);
app.post("/mail", mailing);
app.post("/All", All);
app.post("/usermail",findUserMail);
app.listen(port, () => console.log("port is running in", port));

/*
API_KEY='AIzaSyC_RJGAYyK58cFI_bORTyAQllOtguS1N6U'
USERKEY='1:239548089147:web:e6981316b02f0ba1066d1e'
DATABASE='mongodb+srv://DarkChoco:zF5TOk2ddLv7yPLy@cluster0.yvhzzep.mongodb.net/?retryWrites=true&w=majority'
PASS='befk tetk mevf thuw'
HOST='smtp.gmail.com'
SERVICE='gmail'
USER='sivashiva27012004@gmail.com'
PORT=587
*/
