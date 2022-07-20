'use strict';
let response = require('./res');
let connection = require('./koneksi');

exports.index = function(req, res) {
    response.ok("APLIKASI REST API BERJALAN");
}