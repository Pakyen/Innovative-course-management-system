/**
 * 初始化查看作业详情对话框
 */
var CmStujobInfoDlg = {
    cmStujobInfoData : {}
};

/**
 * 清除数据
 */
CmStujobInfoDlg.clearData = function() {
    this.cmStujobInfoData = {};
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
CmStujobInfoDlg.set = function(key, val) {
    this.cmStujobInfoData[key] = (typeof val == "undefined") ? $("#" + key).val() : val;
    return this;
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
CmStujobInfoDlg.get = function(key) {
    return $("#" + key).val();
}

/**
 * 关闭此对话框
 */
CmStujobInfoDlg.close = function() {
    parent.layer.close(window.parent.CmStujob.layerIndex);
}

/**
 * 收集数据
 */
CmStujobInfoDlg.collectData = function() {
    this
    .set('id')
    .set('homeworkId')
    .set('stuId')
    .set('fileName')
    .set('filePath')
    .set('grade')
    .set('ifLock')
    .set('ifAudit')
    .set('submitTime')
    .set('assId');
}

/**
 * 提交添加
 */
CmStujobInfoDlg.addSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/cmStujob/add", function(data){
        Feng.success("添加成功!");
        window.parent.CmStujob.table.refresh();
        CmStujobInfoDlg.close();
    },function(data){
        Feng.error("添加失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.cmStujobInfoData);
    ajax.start();
}

/**
 * 提交修改
 */
CmStujobInfoDlg.editSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/cmStujob/update", function(data){
        Feng.success("修改成功!");
        window.parent.CmStujob.table.refresh();
        CmStujobInfoDlg.close();
    },function(data){
        Feng.error("修改失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.cmStujobInfoData);
    ajax.start();
}

$(function() {

});
