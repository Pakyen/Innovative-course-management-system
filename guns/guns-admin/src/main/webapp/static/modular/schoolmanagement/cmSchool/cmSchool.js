/**
 * 学校管理管理初始化
 */
var CmSchool = {
    id: "CmSchoolTable",	//表格id
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

/**
 * 初始化表格的列
 */
CmSchool.initColumn = function () {
    return [
        {field: 'selectItem', radio: true},
            {title: '学校编号', field: 'id', visible: true, align: 'center', valign: 'middle'},
            {title: '学校管理员账号', field: 'userId', visible: true, align: 'center', valign: 'middle'},
            {title: '学校名称', field: 'schoolName', visible: true, align: 'center', valign: 'middle'},
            {title: '学校类型', field: 'schoolType', visible: true, align: 'center', valign: 'middle'}
    ];
};

/**
 * 检查是否选中
 */
CmSchool.check = function () {
    var selected = $('#' + this.id).bootstrapTable('getSelections');
    if(selected.length == 0){
        Feng.info("请先选中表格中的某一记录！");
        return false;
    }else{
        CmSchool.seItem = selected[0];
        return true;
    }
};

/**
 * 点击添加学校管理
 */
CmSchool.openAddCmSchool = function () {
    var index = layer.open({
        type: 2,
        title: '添加学校管理',
        area: ['800px', '420px'], //宽高
        fix: false, //不固定
        maxmin: true,
        content: Feng.ctxPath + '/cmSchool/cmSchool_add'
    });
    this.layerIndex = index;
};

/**
 * 打开查看学校管理详情
 */
CmSchool.openCmSchoolDetail = function () {
    if (this.check()) {
        var index = layer.open({
            type: 2,
            title: '学校管理详情',
            area: ['800px', '420px'], //宽高
            fix: false, //不固定
            maxmin: true,
            content: Feng.ctxPath + '/cmSchool/cmSchool_update/' + CmSchool.seItem.id
        });
        this.layerIndex = index;
    }
};

/**
 * 删除学校管理
 */
CmSchool.delete = function () {
    if (this.check()) {
        var ajax = new $ax(Feng.ctxPath + "/cmSchool/delete", function (data) {
            Feng.success("删除成功!");
            CmSchool.table.refresh();
        }, function (data) {
            Feng.error("删除失败!" + data.responseJSON.message + "!");
        });
        ajax.set("cmSchoolId",this.seItem.id);
        ajax.start();
    }
};

/**
 * 查询学校管理列表
 */
CmSchool.search = function () {
    var queryData = {};
    queryData['condition'] = $("#condition").val();
    CmSchool.table.refresh({query: queryData});
};

$(function () {
    var defaultColunms = CmSchool.initColumn();
    var table = new BSTable(CmSchool.id, "/cmSchool/list", defaultColunms);
    table.setPaginationType("client");
    CmSchool.table = table.init();
});
