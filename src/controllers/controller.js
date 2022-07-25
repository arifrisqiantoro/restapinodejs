"use strict";
let response = require("./res");
let connection = require("../config/koneksi");
const { json } = require("body-parser");

/*exports.index = function (req, res) {
  response.ok("APLIKASI REST API BERJALAN", res);
};
*/

exports.index = function (req, res, next) {
  res.render("../src/views/index");
}

exports.getdatauser = function (req, res) {
  connection.query("SELECT * FROM ms_user", function (error, rows, fields) {
    if (error) {
      connection.log(error);
    } else {
      res.render("../src/views/datauser", {rows});
    }
  });
};

exports.getdatauserbyid = function (req, res) {
  let id = req.params.id;
  connection.query(
    "SELECT * FROM ms_user where id_user = ?",
    [id],
    function (error, rows, fields) {
      if (error) {
        connection.log(error);
      } else {
        res.render("../src/views/datauser", {rows});
      }
    }
  );
};

exports.postdatauser = function (req, res) {

    response.ok("METHOD POST DATA USER OK", res);
}

exports.putdatauser = function (req, res) {

  response.ok("METHOD PUT DATA USER OK", res);
}

exports.deletedatauser = function (req, res) {

    response.ok("METHOD DELETE DATA USER OK", res);
    
}