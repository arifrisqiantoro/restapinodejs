"use strict";
let response = require("./res");
let connection = require("./koneksi");

exports.index = function (req, res) {
  response.ok("APLIKASI REST API BERJALAN", res);
};

exports.getdatauser = function (req, res) {
  connection.query("SELECT * FROM ms_user", function (error, rows, fields) {
    if (error) {
      connection.log(error);
    } else {
      response.ok(rows, res);
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
        response.ok(rows, res);
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