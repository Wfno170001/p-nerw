module.exports = {

    GetDataTable : function (tid) {
        tid = tid || "datatable";
        return $("#" + tid).DataTable();
    },

    DestroyDataTable : function (tid) {
        tid = tid || "datatable";
        $("#" + tid).DataTable().destroy();
    },

    InitDataTable : function (opt, tid) {
        tid = tid || "datatable";
        var option = {
            paging:   true,
            ordering: true,
            info:     true,
            responsive: true,
            language: {
                'emptyTable': '没有数据',
                'loadingRecords': '加载中...',
                'processing': '查询中...',
                'search': '搜索:',
                'lengthMenu': '每页 _MENU_ 件',
                'zeroRecords': '没有数据',
                'paginate': {
                    'first':      '第一页',
                    'last':       '最后一页',
                    'next':       '下一页',
                    'previous':   '上一页'
                },
                'info': '第 _PAGE_ 页 / 共 _PAGES_ 页',
                'infoEmpty': '没有数据',
                'infoFiltered': '(过滤总件数 _MAX_ 条)'
            },
            buttons: [
                {extend: 'copy',  className: 'btn-sm' },
                {extend: 'csv',   className: 'btn-sm' },
                {extend: 'excel', className: 'btn-sm', title: 'XLS-File'},
                {extend: 'pdf',   className: 'btn-sm', title: $('title').text() },
                {extend: 'print', className: 'btn-sm' }
            ],
            dom: 'ftp'
        };

        for(var key in opt){
            option[key] = opt[key];
        }

        return $("#" + tid).dataTable(option);
    }
}