/**
 * 学生管理管理初始化
 */
var CmStudent = {
    id: "CmStudentTable",	//表格id
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

/**
 * 初始化表格的列
 */
CmStudent.initColumn = function () {
    return [
        {field: 'selectItem', radio: true},
            {title: '学生账号', field: 'id', visible: true, align: 'center', valign: 'middle'},
            {title: '学校编号', field: 'schoolId', visible: true, align: 'center', valign: 'middle'},
            {title: '班级编号', field: 'classId', visible: true, align: 'center', valign: 'middle'},
            {title: '结对编程组编号', field: 'teamId', visible: true, align: 'center', valign: 'middle'},
            {title: '团队项目组编号', field: 'groupId', visible: true, align: 'center', valign: 'middle'},
            {title: '账户密码', field: 'password', visible: true, align: 'center', valign: 'middle'},
            {title: '是否是PM', field: 'ifPm', visible: true, align: 'center', valign: 'middle'},
            {title: '账号使用', field: 'ifUse', visible: true, align: 'center', valign: 'middle'},
            {title: '学生对应的助教账号', field: 'assistantId', visible: true, align: 'center', valign: 'middle'},
            {title: '电话', field: 'telephone', visible: true, align: 'center', valign: 'middle'},
            {title: '邮箱', field: 'email', visible: true, align: 'center', valign: 'middle'},
            {title: '学生姓名', field: 'name', visible: true, align: 'center', valign: 'middle'}
    ];
};

/**
 * 检查是否选中
 */
CmStudent.check = function () {
    var selected = $('#' + this.id).bootstrapTable('getSelections');
    if(selected.length == 0){
        Feng.info("请先选中表格中的某一记录！");
        return false;
    }else{
        CmStudent.seItem = selected[0];
        return true;
    }
};

/**
 * 点击添加学生管理
 */
CmStudent.openAddCmStudent = function () {
    var index = layer.open({
        type: 2,
        title: '添加学生管理',
        area: ['800px', '420px'], //宽高
        fix: false, //不固定
        maxmin: true,
        content: Feng.ctxPath + '/cmStudent/cmStudent_add'
    });
    this.layerIndex = index;
};

/**
 * 打开查看学生管理详情
 */
CmStudent.openCmStudentDetail = function () {
    if (this.check()) {
        var index = layer.open({
            type: 2,
            title: '学生管理详情',
            area: ['800px', '420px'], //宽高
            fix: false, //不固定
            maxmin: true,
            content: Feng.ctxPath + '/cmStudent/cmStudent_update/' + CmStudent.seItem.id
        });
        this.layerIndex = index;
    }
};

/**
 * 删除学生管理
 */
CmStudent.delete = function () {
    if (this.check()) {
        var ajax = new $ax(Feng.ctxPath + "/cmStudent/delete", function (data) {
            Feng.success("删除成功!");
            CmStudent.table.refresh();
        }, function (data) {
            Feng.error("删除失败!" + data.responseJSON.message + "!");
        });
        ajax.set("cmStudentId",this.seItem.id);
        ajax.start();
    }
};

/**
 * 查询学生管理列表
 */
CmStudent.search = function () {
    var queryData = {};
    queryData['condition'] = $("#condition").val();
    CmStudent.table.refresh({query: queryData});
};

$(function () {
    var defaultColunms = CmStudent.initColumn();
    var table = new BSTable(CmStudent.id, "/cmStudent/list", defaultColunms);
    table.setPaginationType("client");
    CmStudent.table = table.init();
});
