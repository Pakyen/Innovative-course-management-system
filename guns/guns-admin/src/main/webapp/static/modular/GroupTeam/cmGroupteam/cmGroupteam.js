/**
 * 团队小组管理初始化
 */
var CmGroupteam = {
    id: "CmGroupteamTable",	//表格id
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

/**
 * 初始化表格的列
 */
CmGroupteam.initColumn = function () {
    return [
        {field: 'selectItem', radio: true},
            {title: '主键id', field: 'id', visible: true, align: 'center', valign: 'middle'},
            {title: '账号', field: 'account', visible: true, align: 'center', valign: 'middle'},
            {title: '名字', field: 'name', visible: true, align: 'center', valign: 'middle'},
            {title: '角色id', field: 'roleid', visible: true, align: 'center', valign: 'middle'},
            {title: '团队ID', field: 'groupId', visible: true, align: 'center', valign: 'middle'}
    ];
};

/**
 * 检查是否选中
 */
CmGroupteam.check = function () {
    var selected = $('#' + this.id).bootstrapTable('getSelections');
    if(selected.length == 0){
        Feng.info("请先选中表格中的某一记录！");
        return false;
    }else{
        CmGroupteam.seItem = selected[0];
        return true;
    }
};

/**
 * 点击添加团队小组
 */
CmGroupteam.openAddCmGroupteam = function () {
    var index = layer.open({
        type: 2,
        title: '添加团队小组',
        area: ['800px', '420px'], //宽高
        fix: false, //不固定
        maxmin: true,
        content: Feng.ctxPath + '/cmGroupteam/cmGroupteam_add'
    });
    this.layerIndex = index;
};

/**
 * 打开查看团队小组详情
 */
CmGroupteam.openCmGroupteamDetail = function () {
    if (this.check()) {
        var index = layer.open({
            type: 2,
            title: '团队小组详情',
            area: ['800px', '420px'], //宽高
            fix: false, //不固定
            maxmin: true,
            content: Feng.ctxPath + '/cmGroupteam/cmGroupteam_update/' + CmGroupteam.seItem.id
        });
        this.layerIndex = index;
    }
};

/**
 * 删除团队小组
 */
CmGroupteam.delete = function () {
    if (this.check()) {
        var ajax = new $ax(Feng.ctxPath + "/cmGroupteam/delete", function (data) {
            Feng.success(data+"!");
            CmGroupteam.table.refresh();
        }, function (data) {
            Feng.error("删除失败!" + data.responseJSON.message + "!");
        });
        ajax.set("cmGroupteamId",this.seItem.id);
        ajax.start();
    }
};

/**
 * 查询团队小组列表
 */
CmGroupteam.search = function () {
    var queryData = {};
    queryData['condition'] = $("#condition").val();
    CmGroupteam.table.refresh({query: queryData});
};

$(function () {
    var defaultColunms = CmGroupteam.initColumn();
    var table = new BSTable(CmGroupteam.id, "/cmGroupteam/list", defaultColunms);
    table.setPaginationType("client");
    CmGroupteam.table = table.init();
});
