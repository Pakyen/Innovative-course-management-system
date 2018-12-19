/**
 * 上传作业管理初始化
 */
var CmStuupload = {
    id: "CmStuuploadTable",	//表格id
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

/**
 * 初始化表格的列
 */
CmStuupload.initColumn = function () {
    return [
        {field: 'selectItem', radio: true},
            // {title: '', field: 'id', visible: true, align: 'center', valign: 'middle'},
            {title: '作业编号', field: 'homeworkId', visible: true, align: 'center', valign: 'middle'},
            {title: '学生账号', field: 'stuId', visible: true, align: 'center', valign: 'middle'},
            {title: '作业名称', field: 'fileName', visible: true, align: 'center', valign: 'middle'},
            {title: '文件路径', field: 'filePath', visible: true, align: 'center', valign: 'middle'},
            {title: '提交时间', field: 'submitTime', visible: true, align: 'center', valign: 'middle'},
            {title: '助教账号', field: 'assId', visible: true, align: 'center', valign: 'middle'}
    ];
};

/**
 * 检查是否选中
 */
CmStuupload.check = function () {
    var selected = $('#' + this.id).bootstrapTable('getSelections');
    if(selected.length == 0){
        Feng.info("请先选中表格中的某一记录！");
        return false;
    }else{
        CmStuupload.seItem = selected[0];
        return true;
    }
};

/**
 * 点击添加上传作业
 */
CmStuupload.openAddCmStuupload = function () {
    var index = layer.open({
        type: 2,
        title: '添加上传作业',
        area: ['800px', '420px'], //宽高
        fix: false, //不固定
        maxmin: true,
        content: Feng.ctxPath + '/cmStuupload/cmStuupload_add'
    });
    this.layerIndex = index;
};


/**
 * 删除上传作业
 */
CmStuupload.delete = function () {
    if (this.check()) {
        var ajax = new $ax(Feng.ctxPath + "/cmStuupload/delete", function (data) {
            Feng.success("删除成功!");
            CmStuupload.table.refresh();
        }, function (data) {
            Feng.error("删除失败!" + data.responseJSON.message + "!");
        });
        ajax.set("cmStuuploadId",this.seItem.id);
        ajax.start();
    }
};

/**
 * 查询上传作业列表
 */
CmStuupload.search = function () {
    var queryData = {};
    queryData['condition'] = $("#condition").val();
    CmStuupload.table.refresh({query: queryData});
};

$(function () {
    var defaultColunms = CmStuupload.initColumn();
    var table = new BSTable(CmStuupload.id, "/cmStuupload/list", defaultColunms);
    table.setPaginationType("client");
    CmStuupload.table = table.init();
});
