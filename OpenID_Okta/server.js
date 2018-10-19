"use strict";

const express = require("express");
const session = require("express-session");
const ExpressOIDC = require("@okta/oidc-middleware").ExpressOIDC;
var cons = require('consolidate');
var path = require('path');

let app = express();

// Globals
const OKTA_ISSUER_URI = "https://ucenfotec-ac.okta.com"
const OKTA_CLIENT_ID = "0oa2r__________dLTaU356";
const OKTA_CLIENT_SECRET = "rPJ4obTndhp____________WHbHTaLMegmt";
const REDIRECT_URI = "http://localhost:3000/authorization-code/callback";
const PORT = process.env.PORT || "3000";
const SECRET = "kajshdkajshdkjahsdkjahsdkjahskjdhaksjhdkajhsdkajhsdkjsd";

// App settings
// app.set("view engine", "pug");
// view engine setup
app.engine('html', cons.swig)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

// App middleware
app.use("/static", express.static("static"));

app.use(session({
  cookie: { httpOnly: true },
  secret: SECRET
}));

let oidc = new ExpressOIDC({
  issuer: OKTA_ISSUER_URI,
  client_id: OKTA_CLIENT_ID,
  client_secret: OKTA_CLIENT_SECRET,
  redirect_uri: REDIRECT_URI,
  routes: { callback: { defaultRedirect: "/dashboard" } },
  scope: 'openid profile'
});

// App routes
app.use(oidc.router);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/dashboard", oidc.ensureAuthenticated(), (req, res) => {
  res.render("dashboard", { user: req.userinfo });
});

app.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});


const openIdClient = require('openid-client');
openIdClient.Issuer.defaultHttpOptions.timeout = 20000;

oidc.on("ready", () => {
  console.log("Server running on port: " + PORT);
  app.listen(parseInt(PORT));
});

oidc.on("error", err => {
  console.error(err);
});
