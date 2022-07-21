"use strict";

module.exports = function (app) {
  let viewjson = require("./controller");

  app.route("/").get(viewjson.index);

  //menampilkan semua data ms_user
  app.route("/tampildatauser").get(viewjson.tampildatauser);

  //menampilkan data ms_user berdasarkan id_user

  app.route("/tampildatauser/:id").get(viewjson.tampildatauserbyid);
};
