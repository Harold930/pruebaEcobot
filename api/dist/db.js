"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

//Acṕa hago la conexión con la base de datos. 
require('dotenv').config();

var _require = require('sequelize'),
    Sequelize = _require.Sequelize;

var _process$env = process.env,
    DB_USER = _process$env.DB_USER,
    DB_PASSWORD = _process$env.DB_PASSWORD,
    DB_HOST = _process$env.DB_HOST;
var sequelize = new Sequelize("postgres://".concat(DB_USER, ":").concat(DB_PASSWORD, "@").concat(DB_HOST, "/ecobotDB"), {
  logging: false,
  "native": false
});
var _default = sequelize;
exports["default"] = _default;