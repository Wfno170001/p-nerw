module.exports = {
    getUsers : function (suc) {
        $.ajax({
            type: 'get',
            url: '/v1/user',
            async: false,
            success: function (result) {
                suc(result);
            }
        });
    }
}