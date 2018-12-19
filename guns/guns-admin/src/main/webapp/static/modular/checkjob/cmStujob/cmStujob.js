/**
 * 查看作业管理初始化
 */
var CmStujob = {
    id: "CmStujobTable",	//表格id
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

/**
 * 初始化表格的列
 */
CmStujob.initColumn = function () {
    return [
        {field: 'selectItem', radio: true},
            // {title: '', field: 'id', visible: true, align: 'center', valign: 'middle'},
            {title: '作业编号', field: 'homeworkId', visible: true, align: 'center', valign: 'middle'},
            {title: '学生账号', field: 'stuId', visible: true, align: 'center', valign: 'middle'},
            {title: '作业名称', field: 'fileName', visible: true, align: 'center', valign: 'middle'},
            {title: '文件路径', field: 'filePath', visible: true, align: 'center', valign: 'middle'},
            {title: '分数', field: 'grade', visible: true, align: 'center', valign: 'middle'},
            {title: '是否锁定', field: 'ifLock', visible: true, align: 'center', valign: 'middle'},
            {title: '是否批改', field: 'ifAudit', visible: true, align: 'center', valign: 'middle'},
            {title: '提交时间', field: 'submitTime', visible: true, align: 'center', valign: 'middle'},
            {title: '助教账号', field: 'assId', visible: true, align: 'center', valign: 'middle'}
    ];
};

/**
 * 检查是否选中
 */
CmStujob.check = function () {
    var selected = $('#' + this.id).bootstrapTable('getSelections');
    if(selected.length == 0){
        Feng.info("请先选中表格中的某一记录！");
        return false;
    }else{
        CmStujob.seItem = selected[0];
        return true;
    }
};

/**
 * 点击添加查看作业
 */
CmStujob.openAddCmStujob = function () {
    var index = layer.open({
        type: 2,
        title: '添加查看作业',
        area: ['800px', '420px'], //宽高
        fix: false, //不固定
        maxmin: true,
        content: Feng.ctxPath + '/cmStujob/cmStujob_add'
    });
    this.layerIndex = index;
};

/**
 * 打开查看查看作业详情
 */
CmStujob.openCmStujobDetail = function () {
    if (this.check()) {
        var index = layer.open({
            type: 2,
            title: '查看作业详情',
            area: ['800px', '420px'], //宽高
            fix: false, //不固定
            maxmin: true,
            content: Feng.ctxPath + '/cmStujob/cmStujob_update/' + CmStujob.seItem.id
        });
        this.layerIndex = index;
    }
};

/**
 * 删除查看作业
 */
CmStujob.delete = function () {
    if (this.check()) {
        var ajax = new $ax(Feng.ctxPath + "/cmStujob/delete", function (data) {
            Feng.success("删除成功!");
            CmStujob.table.refresh();
        }, function (data) {
            Feng.error("删除失败!" + data.responseJSON.message + "!");
        });
        ajax.set("cmStujobId",this.seItem.id);
        ajax.start();
    }
};

/**
 * 查询查看作业列表
 */
CmStujob.search = function () {
    var queryData = {};
    queryData['condition'] = $("#condition").val();
    CmStujob.table.refresh({query: queryData});
};

$(function () {
    var defaultColunms = CmStujob.initColumn();
    var table = new BSTable(CmStujob.id, "/cmStujob/list", defaultColunms);
    table.setPaginationType("client");
    CmStujob.table = table.init();
});
