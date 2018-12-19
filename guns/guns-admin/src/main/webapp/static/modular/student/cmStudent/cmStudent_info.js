/**
 * 初始化学生管理详情对话框
 */
var CmStudentInfoDlg = {
    cmStudentInfoData : {}
};

/**
 * 清除数据
 */
CmStudentInfoDlg.clearData = function() {
    this.cmStudentInfoData = {};
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
CmStudentInfoDlg.set = function(key, val) {
    this.cmStudentInfoData[key] = (typeof val == "undefined") ? $("#" + key).val() : val;
    return this;
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
CmStudentInfoDlg.get = function(key) {
    return $("#" + key).val();
}

/**
 * 关闭此对话框
 */
CmStudentInfoDlg.close = function() {
    parent.layer.close(window.parent.CmStudent.layerIndex);
}

/**
 * 收集数据
 */
CmStudentInfoDlg.collectData = function() {
    this
    .set('id')
    .set('avatar')
    .set('account')
    .set('password')
    .set('salt')
    .set('name')
    .set('birthday')
    .set('sex')
    .set('email')
    .set('phone')
    .set('roleid')
    .set('deptid')
    .set('status')
    .set('createtime')
    .set('version')
    .set('classId')
    .set('teamId')
    .set('groupId')
    .set('assistantId');
}

/**
 * 提交添加
 */
CmStudentInfoDlg.addSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/cmStudent/add", function(data){
        Feng.success("添加成功!");
        window.parent.CmStudent.table.refresh();
        CmStudentInfoDlg.close();
    },function(data){
        Feng.error("添加失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.cmStudentInfoData);
    ajax.start();
}

/**
 * 提交修改
 */
CmStudentInfoDlg.editSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/cmStudent/update", function(data){
        Feng.success("修改成功!");
        window.parent.CmStudent.table.refresh();
        CmStudentInfoDlg.close();
    },function(data){
        Feng.error("修改失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.cmStudentInfoData);
    ajax.start();
}

$(function() {

});
