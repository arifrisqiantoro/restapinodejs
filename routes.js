'use strict';

module.exports = function(app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

        //menampilkan semua data ms_user
   app.route('/tampildatauser')
        .get(jsonku.tampildatauser);

        //menampilkan data ms_user berdasarkan id_user

    app.route('/tampildatauser/:id')
        .get(jsonku.tampildatauserbyid);
}

