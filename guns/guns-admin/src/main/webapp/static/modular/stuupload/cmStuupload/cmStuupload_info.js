/**
 * 初始化上传作业详情对话框
 */
var CmStuuploadInfoDlg = {
    cmStuuploadInfoData : {}
};

/**
 * 清除数据
 */
CmStuuploadInfoDlg.clearData = function() {
    this.cmStuuploadInfoData = {};
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
CmStuuploadInfoDlg.set = function(key, val) {
    this.cmStuuploadInfoData[key] = (typeof val == "undefined") ? $("#" + key).val() : val;
    return this;
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
CmStuuploadInfoDlg.get = function(key) {
    return $("#" + key).val();
}

/**
 * 关闭此对话框
 */
CmStuuploadInfoDlg.close = function() {
    parent.layer.close(window.parent.CmStuupload.layerIndex);
}

/**
 * 收集数据
 */
CmStuuploadInfoDlg.collectData = function() {
    this
    .set('id')
    .set('homeworkId')
    .set('stuId')
    .set('fileName')
    .set('filePath')
    .set('submitTime')
    .set('assId');
}

/**
 * 提交添加
 */
CmStuuploadInfoDlg.addSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/cmStuupload/add", function(data){
        Feng.success("添加成功!");
        window.parent.CmStuupload.table.refresh();
        CmStuuploadInfoDlg.close();
    },function(data){
        Feng.error("添加失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.cmStuuploadInfoData);
    ajax.start();
}

/**
 * 提交修改
 */
CmStuuploadInfoDlg.editSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/cmStuupload/update", function(data){
        Feng.success("修改成功!");
        window.parent.CmStuupload.table.refresh();
        CmStuuploadInfoDlg.close();
    },function(data){
        Feng.error("修改失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.cmStuuploadInfoData);
    ajax.start();
}

$(function() {

});
