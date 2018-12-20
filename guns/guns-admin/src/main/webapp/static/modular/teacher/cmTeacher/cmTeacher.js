/**
 * 教师管理管理初始化
 */
var CmTeacher = {
    id: "CmTeacherTable",	//表格id
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1,
    deptid:0
};

/**
 * 初始化表格的列
 */
CmTeacher.initColumn = function () {
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
            // {title: '部门id', field: 'deptid', visible: true, align: 'center', valign: 'middle'},
            {title: '部门', field: 'deptName', visible: true,align: 'center', valign: 'middle', sortable: true},
            // {title: '状态', field: 'status', visible: true, align: 'center', valign: 'middle'},
            {title: '状态', field: 'statusName',visible: true, align: 'center', valign: 'middle', sortable: true},
            {title: '创建时间', field: 'createtime', visible: true, align: 'center', valign: 'middle'},
            // {title: '保留字段', field: 'version', visible: true, align: 'center', valign: 'middle'},
            {title: '课程编号', field: 'classId', visible: true, align: 'center', valign: 'middle'}
    ];
};

/**
 * 检查是否选中
 */
CmTeacher.check = function () {
    var selected = $('#' + this.id).bootstrapTable('getSelections');
    if(selected.length == 0){
        Feng.info("请先选中表格中的某一记录！");
        return false;
    }else{
        CmTeacher.seItem = selected[0];
        return true;
    }
};

/**
 * 点击添加教师管理
 */
CmTeacher.openAddCmTeacher = function () {
    var index = layer.open({
        type: 2,
        title: '添加教师管理',
        area: ['800px', '420px'], //宽高
        fix: false, //不固定
        maxmin: true,
        content: Feng.ctxPath + '/cmTeacher/cmTeacher_add'
    });
    this.layerIndex = index;
};

/**
 * 打开查看教师管理详情
 */
CmTeacher.openCmTeacherDetail = function () {
    if (this.check()) {
        var index = layer.open({
            type: 2,
            title: '教师管理详情',
            area: ['800px', '420px'], //宽高
            fix: false, //不固定
            maxmin: true,
            content: Feng.ctxPath + '/cmTeacher/cmTeacher_update/' + CmTeacher.seItem.id
        });
        this.layerIndex = index;
    }
};

/**
 * 删除教师管理
 */
CmTeacher.delete = function () {
    if (this.check()) {
        var ajax = new $ax(Feng.ctxPath + "/cmTeacher/delete", function (data) {
            Feng.success("删除成功!");
            CmTeacher.table.refresh();
        }, function (data) {
            Feng.error("删除失败!" + data.responseJSON.message + "!");
        });
        ajax.set("cmTeacherId",this.seItem.id);
        ajax.start();
    }
};

/**
 * 查询教师管理列表
 */
CmTeacher.search = function () {
    var queryData = {};
    queryData['condition'] = $("#condition").val();
    CmTeacher.table.refresh({query: queryData});
};

$(function () {
    var defaultColunms = CmTeacher.initColumn();
    var table = new BSTable(CmTeacher.id, "/cmTeacher/list", defaultColunms);
    table.setPaginationType("client");
    CmTeacher.table = table.init();
});
