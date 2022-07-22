"use strict";

module.exports = function (app) {
  let response = require("./controller");

    app.route("/")
     .get(response.index);

  //menampilkan semua data ms_user
    app.route("/getdatauser")
     .get(response.getdatauser);

  //menampilkan data ms_user berdasarkan id_user

    app.route("/getdatauser/:id")
     .get(response.getdatauserbyid);

    app.route("/postdatauser")
    .post(response.postdatauser);

    app.route("/putdatauser")
    .put(response.putdatauser);

    app.route("/deletedatauser")
    .delete(response.deletedatauser);

};