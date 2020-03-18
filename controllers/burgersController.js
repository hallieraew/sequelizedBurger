var express = require("express");
var Burger = require("../models/burger");
var app = express();
var db = require("../models")

// get route -> index

app.get("/", function(req, res) {
  res.redirect("/burgers");
});

app.get("/burgers", function(req, res) {
  // findAll returns all entries for a table when used with no options
  db.Burger.findAll({}).then(function(dbburger) {
    res.json(dbburger);
    res.render("index", dbburger);
  });
});

// app.get("/burgers", function(req, res) {
//   // express callback response by calling burger.selectAllBurger
//   burger.all(function(burgerData) {
//     // wrapper for orm.js that using MySQL query callback will return burger_data, render to index with handlebar
//     res.render("index", { burger_data: burgerData });
//   });
// });

// post route -> back to index
app.post("/burgers/create", function(req, res) {
  burger.create(req.body.burger_name, function(result) {
    console.log(result);
    res.redirect("/");
  });
});

// put route -> back to index
app.put("/burgers/:id", function(req, res) {
  burger.update(req.params.id, function(result) {
    // wrapper for orm.js that using MySQL update callback will return a log to console,
    // render back to index with handle
    console.log(result);
    // Send back response and let page reload from .then in Ajax
    res.sendStatus(200);
  });
});

module.exports = app;


// var burger = {
//   all: function(cb) {
//     orm.all("burgers", function(res) {
//       cb(res);
//     });
//   },
//   create: function(name, cb) {
//     orm.create("burgers", [
//       "burger_name", "devoured"
//     ], [
//       name, false
//     ], cb);
//   },
//   update: function(id, cb) {
//     var condition = "id=" + id;
//     orm.update("burgers", {
//       devoured: true
//     }, condition, cb);
//   }
// };