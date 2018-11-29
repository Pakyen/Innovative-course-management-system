/**
 * 推荐资料管理初始化
 */
var CmSysfile = {
    id: "CmSysfileTable",	//表格id
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

/**
 * 初始化表格的列
 */
CmSysfile.initColumn = function () {
    return [
        {field: 'selectItem', radio: true},
            {title: '资料编号', field: 'id', visible: true, align: 'center', valign: 'middle'},
            {title: '教师账号', field: 'userId', visible: true, align: 'center', valign: 'middle'},
            {title: '资料名称', field: 'fileName', visible: true, align: 'center', valign: 'middle'},
            {title: '资料路径', field: 'filePath', visible: true, align: 'center', valign: 'middle'}
    ];
};

/**
 * 检查是否选中
 */
CmSysfile.check = function () {
    var selected = $('#' + this.id).bootstrapTable('getSelections');
    if(selected.length == 0){
        Feng.info("请先选中表格中的某一记录！");
        return false;
    }else{
        CmSysfile.seItem = selected[0];
        return true;
    }
};

/**
 * 点击添加推荐资料
 */
CmSysfile.openAddCmSysfile = function () {
    var index = layer.open({
        type: 2,
        title: '添加推荐资料',
        area: ['800px', '420px'], //宽高
        fix: false, //不固定
        maxmin: true,
        content: Feng.ctxPath + '/cmSysfile/upload'
    });
    this.layerIndex = index;
};

/**
 * 打开查看推荐资料详情
 */
CmSysfile.openCmSysfileDetail = function () {
    if (this.check()) {
        var index = layer.open({
            type: 2,
            title: '推荐资料详情',
            area: ['800px', '420px'], //宽高
            fix: false, //不固定
            maxmin: true,
            content: Feng.ctxPath + '/cmSysfile/cmSysfile_update/' + CmSysfile.seItem.id
        });
        this.layerIndex = index;
    }
};

/**
 * 删除推荐资料
 */
CmSysfile.delete = function () {
    if (this.check()) {
        var ajax = new $ax(Feng.ctxPath + "/cmSysfile/delete", function (data) {
            Feng.success("删除成功!");
            CmSysfile.table.refresh();
        }, function (data) {
            Feng.error("删除失败!" + data.responseJSON.message + "!");
        });
        ajax.set("cmSysfileId",this.seItem.id);
        ajax.start();
    }
};

/**
 * 查询推荐资料列表
 */
CmSysfile.search = function () {
    var queryData = {};
    queryData['condition'] = $("#condition").val();
    CmSysfile.table.refresh({query: queryData});
};

$(function () {
    var defaultColunms = CmSysfile.initColumn();
    var table = new BSTable(CmSysfile.id, "/cmSysfile/list", defaultColunms);
    table.setPaginationType("client");
    CmSysfile.table = table.init();
});
