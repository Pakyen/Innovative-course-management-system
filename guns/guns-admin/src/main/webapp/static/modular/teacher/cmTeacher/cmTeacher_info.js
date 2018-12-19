/**
 * 初始化教师管理详情对话框
 */
var CmTeacherInfoDlg = {
    cmTeacherInfoData : {}
};

/**
 * 清除数据
 */
CmTeacherInfoDlg.clearData = function() {
    this.cmTeacherInfoData = {};
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
CmTeacherInfoDlg.set = function(key, val) {
    this.cmTeacherInfoData[key] = (typeof val == "undefined") ? $("#" + key).val() : val;
    return this;
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
CmTeacherInfoDlg.get = function(key) {
    return $("#" + key).val();
}

/**
 * 关闭此对话框
 */
CmTeacherInfoDlg.close = function() {
    parent.layer.close(window.parent.CmTeacher.layerIndex);
}

/**
 * 收集数据
 */
CmTeacherInfoDlg.collectData = function() {
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
    .set('classId');
}

/**
 * 提交添加
 */
CmTeacherInfoDlg.addSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/cmTeacher/add", function(data){
        Feng.success("添加成功!");
        window.parent.CmTeacher.table.refresh();
        CmTeacherInfoDlg.close();
    },function(data){
        Feng.error("添加失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.cmTeacherInfoData);
    ajax.start();
}

/**
 * 提交修改
 */
CmTeacherInfoDlg.editSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/cmTeacher/update", function(data){
        Feng.success("修改成功!");
        window.parent.CmTeacher.table.refresh();
        CmTeacherInfoDlg.close();
    },function(data){
        Feng.error("修改失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.cmTeacherInfoData);
    ajax.start();
}

$(function() {

});
