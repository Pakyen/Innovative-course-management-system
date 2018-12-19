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
            // {title: '主键id', field: 'id', visible: true, align: 'center', valign: 'middle'},
            // {title: '头像', field: 'avatar', visible: true, align: 'center', valign: 'middle'},
            {title: '账号', field: 'account', visible: true, align: 'center', valign: 'middle'},
            // {title: '密码', field: 'password', visible: true, align: 'center', valign: 'middle'},
            // {title: 'md5密码盐', field: 'salt', visible: true, align: 'center', valign: 'middle'},
            {title: '名字', field: 'name', visible: true, align: 'center', valign: 'middle'},
            // {title: '生日', field: 'birthday', visible: true, align: 'center', valign: 'middle'},
            // {title: '性别（1：男 2：女）', field: 'sex', visible: true, align: 'center', valign: 'middle'},
            {title: '电子邮件', field: 'email', visible: true, align: 'center', valign: 'middle'},
            {title: '电话', field: 'phone', visible: true, align: 'center', valign: 'middle'},
            {title: '角色id', field: 'roleid', visible: true, align: 'center', valign: 'middle'},
            {title: '部门id', field: 'deptid', visible: true, align: 'center', valign: 'middle'},
            {title: '状态(1：启用  2：冻结  3：删除）', field: 'status', visible: true, align: 'center', valign: 'middle'},
            // {title: '创建时间', field: 'createtime', visible: true, align: 'center', valign: 'middle'},
            // {title: '保留字段', field: 'version', visible: true, align: 'center', valign: 'middle'},
            {title: '课程编号', field: 'classId', visible: true, align: 'center', valign: 'middle'},
            {title: '结对小组', field: 'teamId', visible: true, align: 'center', valign: 'middle'},
            {title: '团队小组', field: 'groupId', visible: true, align: 'center', valign: 'middle'},
            {title: '对应助教编号', field: 'assistantId', visible: true, align: 'center', valign: 'middle'}
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
