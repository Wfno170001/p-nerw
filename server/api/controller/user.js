var wrap = require("co-express");
var mysql = require("../dao/user");

module.exports = {
    getUsers : wrap(function* (req, res, next) {
        try {
            mysql.find(req, res, next);
        } catch (err){
            res.json(err);
        }
    }),
    createUser : wrap(function* (req, res, next) {
        try {
            mysql.create(req, res, next);
        } catch (err){
            res.json(err);
        }
    }),
    updateUser : wrap(function* (req, res, next) {
        try {
            mysql.update(req, res, next);
        } catch (err){
            res.json(err);
        }
    }),
    deleteUser : wrap(function* (req, res, next) {
        try {
            mysql.delete(req, res, next);
        } catch (err){
            res.json(err);
        }
    }),
}
