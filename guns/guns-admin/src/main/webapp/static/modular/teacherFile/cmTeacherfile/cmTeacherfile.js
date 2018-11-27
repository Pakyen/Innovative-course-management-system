/**
 * 个人资料管理初始化
 */
var CmTeacherfile = {
    id: "CmTeacherfileTable",	//表格id
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

/**
 * 初始化表格的列
 */
CmTeacherfile.initColumn = function () {
    return [
        {field: 'selectItem', radio: true},
            {title: '文件编号', field: 'id', visible: true, align: 'center', valign: 'middle'},
            {title: '课程编号', field: 'classId', visible: true, align: 'center', valign: 'middle'},
            {title: '文件名称', field: 'fileName', visible: true, align: 'center', valign: 'middle'},
            {title: '文件路径', field: 'filePath', visible: true, align: 'center', valign: 'middle'}
    ];
};

/**
 * 检查是否选中
 */
CmTeacherfile.check = function () {
    var selected = $('#' + this.id).bootstrapTable('getSelections');
    if(selected.length == 0){
        Feng.info("请先选中表格中的某一记录！");
        return false;
    }else{
        CmTeacherfile.seItem = selected[0];
        return true;
    }
};

/**
 * 点击添加个人资料
 */
CmTeacherfile.openAddCmTeacherfile = function () {
    var index = layer.open({
        type: 2,
        title: '添加个人资料',
        area: ['800px', '420px'], //宽高
        fix: false, //不固定
        maxmin: true,
        content: Feng.ctxPath + '/cmTeacherfile/cmTeacherfile_add'
    });
    this.layerIndex = index;
};

/**
 * 打开查看个人资料详情
 */
CmTeacherfile.openCmTeacherfileDetail = function () {
    if (this.check()) {
        var index = layer.open({
            type: 2,
            title: '个人资料详情',
            area: ['800px', '420px'], //宽高
            fix: false, //不固定
            maxmin: true,
            content: Feng.ctxPath + '/cmTeacherfile/cmTeacherfile_update/' + CmTeacherfile.seItem.id
        });
        this.layerIndex = index;
    }
};

/**
 * 删除个人资料
 */
CmTeacherfile.delete = function () {
    if (this.check()) {
        var ajax = new $ax(Feng.ctxPath + "/cmTeacherfile/delete", function (data) {
            Feng.success("删除成功!");
            CmTeacherfile.table.refresh();
        }, function (data) {
            Feng.error("删除失败!" + data.responseJSON.message + "!");
        });
        ajax.set("cmTeacherfileId",this.seItem.id);
        ajax.start();
    }
};

/**
 * 查询个人资料列表
 */
CmTeacherfile.search = function () {
    var queryData = {};
    queryData['condition'] = $("#condition").val();
    CmTeacherfile.table.refresh({query: queryData});
};

$(function () {
    var defaultColunms = CmTeacherfile.initColumn();
    var table = new BSTable(CmTeacherfile.id, "/cmTeacherfile/list", defaultColunms);
    table.setPaginationType("client");
    CmTeacherfile.table = table.init();
});
