var pool = require("../../config/pool");

function  baseDao() {}

baseDao.find = function (req, res, next) {
    pool.getConnection(function (err, conn) {
        if (err) throw err;

        conn.query('SELECT * FROM t_user', function (err, result) {
            if (err) throw err;

            res.json(result);
            conn.release();
        });
    });
};

baseDao.create = function (req, res, next) {
    pool.getConnection(function (err, conn) {
        if (err) throw err;

        var params = req.body;

        var user = {
            username: params.username,
            password: params.password,
            name: params.name,
            gender: params.gender,
            email: params.email,
            status: params.status,
        };

        conn.query('INSERT INTO t_user SET ?', user, function (err, result) {
            if (err) throw err;

            res.json(result);
            conn.release();
        });
    });
};

baseDao.update = function () {

}

baseDao.delete = function () {

}

module.exports = baseDao;