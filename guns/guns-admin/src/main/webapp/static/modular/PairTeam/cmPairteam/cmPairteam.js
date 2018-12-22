/**
 * 结对小组管理初始化
 */
var CmPairteam = {
    id: "CmPairteamTable",	//表格id
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

/**
 * 初始化表格的列
 */
CmPairteam.initColumn = function () {
    return [
        {field: 'selectItem', radio: true},
            {title: '主键id', field: 'id', visible: true, align: 'center', valign: 'middle'},
            {title: '账号', field: 'account', visible: true, align: 'center', valign: 'middle'},
            {title: '名字', field: 'name', visible: true, align: 'center', valign: 'middle'},
            {title: '结对ID', field: 'teamId', visible: true, align: 'center', valign: 'middle'}
    ];
};

/**
 * 检查是否选中
 */
CmPairteam.check = function () {
    var selected = $('#' + this.id).bootstrapTable('getSelections');
    if(selected.length == 0){
        Feng.info("请先选中表格中的某一记录！");
        return false;
    }else{
        CmPairteam.seItem = selected[0];
        return true;
    }
};

/**
 * 点击添加结对小组
 */
CmPairteam.openAddCmPairteam = function () {
    var index = layer.open({
        type: 2,
        title: '添加结对小组',
        area: ['800px', '420px'], //宽高
        fix: false, //不固定
        maxmin: true,
        content: Feng.ctxPath + '/cmPairteam/cmPairteam_add'
    });
    this.layerIndex = index;
};

/**
 * 打开查看结对小组详情
 */
CmPairteam.openCmPairteamDetail = function () {
    if (this.check()) {
        var index = layer.open({
            type: 2,
            title: '结对小组详情',
            area: ['800px', '420px'], //宽高
            fix: false, //不固定
            maxmin: true,
            content: Feng.ctxPath + '/cmPairteam/cmPairteam_update/' + CmPairteam.seItem.id
        });
        this.layerIndex = index;
    }
};

/**
 * 删除结对小组
 */
CmPairteam.delete = function () {
    if (this.check()) {
        var ajax = new $ax(Feng.ctxPath + "/cmPairteam/delete", function (data) {
            Feng.success(data+"!");
            CmPairteam.table.refresh();
        }, function (data) {
            Feng.error("删除失败!" + data.responseJSON.message + "!");
        });
        ajax.set("cmPairteamId",this.seItem.id);
        ajax.start();
    }
};

/**
 * 查询结对小组列表
 */
CmPairteam.search = function () {
    var queryData = {};
    queryData['condition'] = $("#condition").val();
    CmPairteam.table.refresh({query: queryData});
};

$(function () {
    var defaultColunms = CmPairteam.initColumn();
    var table = new BSTable(CmPairteam.id, "/cmPairteam/list", defaultColunms);
    table.setPaginationType("client");
    CmPairteam.table = table.init();
});
