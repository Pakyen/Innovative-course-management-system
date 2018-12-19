/**
 * 初始化PM管理详情对话框
 */
var CmPmInfoDlg = {
    cmPmInfoData : {}
};

/**
 * 清除数据
 */
CmPmInfoDlg.clearData = function() {
    this.cmPmInfoData = {};
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
CmPmInfoDlg.set = function(key, val) {
    this.cmPmInfoData[key] = (typeof val == "undefined") ? $("#" + key).val() : val;
    return this;
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
CmPmInfoDlg.get = function(key) {
    return $("#" + key).val();
}

/**
 * 关闭此对话框
 */
CmPmInfoDlg.close = function() {
    parent.layer.close(window.parent.CmPm.layerIndex);
}

/**
 * 收集数据
 */
CmPmInfoDlg.collectData = function() {
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
CmPmInfoDlg.addSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/cmPm/add", function(data){
        Feng.success("添加成功!");
        window.parent.CmPm.table.refresh();
        CmPmInfoDlg.close();
    },function(data){
        Feng.error("添加失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.cmPmInfoData);
    ajax.start();
}

/**
 * 提交修改
 */
CmPmInfoDlg.editSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/cmPm/update", function(data){
        Feng.success("修改成功!");
        window.parent.CmPm.table.refresh();
        CmPmInfoDlg.close();
    },function(data){
        Feng.error("修改失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.cmPmInfoData);
    ajax.start();
}

$(function() {

});
