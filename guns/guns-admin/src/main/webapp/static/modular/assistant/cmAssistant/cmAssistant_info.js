/**
 * 初始化助教管理详情对话框
 */
var CmAssistantInfoDlg = {
    cmAssistantInfoData : {}
};

/**
 * 清除数据
 */
CmAssistantInfoDlg.clearData = function() {
    this.cmAssistantInfoData = {};
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
CmAssistantInfoDlg.set = function(key, val) {
    this.cmAssistantInfoData[key] = (typeof val == "undefined") ? $("#" + key).val() : val;
    return this;
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
CmAssistantInfoDlg.get = function(key) {
    return $("#" + key).val();
}

/**
 * 关闭此对话框
 */
CmAssistantInfoDlg.close = function() {
    parent.layer.close(window.parent.CmAssistant.layerIndex);
}

/**
 * 收集数据
 */
CmAssistantInfoDlg.collectData = function() {
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
CmAssistantInfoDlg.addSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/cmAssistant/add", function(data){
        Feng.success("添加成功!");
        window.parent.CmAssistant.table.refresh();
        CmAssistantInfoDlg.close();
    },function(data){
        Feng.error("添加失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.cmAssistantInfoData);
    ajax.start();
}

/**
 * 提交修改
 */
CmAssistantInfoDlg.editSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/cmAssistant/update", function(data){
        Feng.success("修改成功!");
        window.parent.CmAssistant.table.refresh();
        CmAssistantInfoDlg.close();
    },function(data){
        Feng.error("修改失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.cmAssistantInfoData);
    ajax.start();
}

$(function() {

});
