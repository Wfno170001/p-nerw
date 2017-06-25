var mysql = require("mysql");

module.exports = mysql.createPool("mysql://root:@localhost:3306/nodejs?charset=utf8&parseTime=True&loc=UTC");