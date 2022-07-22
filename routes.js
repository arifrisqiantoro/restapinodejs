"use strict";

module.exports = function (app) {
  let jsonresponse = require("./controller");

  app.route("/").get(jsonresponse.index);

  //menampilkan semua data ms_user
  app.route("/tampildatauser").get(jsonresponse.tampildatauser);

  //menampilkan data ms_user berdasarkan id_user

  app.route("/tampildatauser/:id").get(jsonresponse.tampildatauserbyid);
};
