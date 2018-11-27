/**
 * 初始化个人资料详情对话框
 */
var CmTeacherfileInfoDlg = {
    cmTeacherfileInfoData : {}
};

/**
 * 清除数据
 */
CmTeacherfileInfoDlg.clearData = function() {
    this.cmTeacherfileInfoData = {};
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
CmTeacherfileInfoDlg.set = function(key, val) {
    this.cmTeacherfileInfoData[key] = (typeof val == "undefined") ? $("#" + key).val() : val;
    return this;
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
CmTeacherfileInfoDlg.get = function(key) {
    return $("#" + key).val();
}

/**
 * 关闭此对话框
 */
CmTeacherfileInfoDlg.close = function() {
    parent.layer.close(window.parent.CmTeacherfile.layerIndex);
}

/**
 * 收集数据
 */
CmTeacherfileInfoDlg.collectData = function() {
    this
    .set('id')
    .set('classId')
    .set('fileName')
    .set('filePath');
}

/**
 * 提交添加
 */
CmTeacherfileInfoDlg.addSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/cmTeacherfile/add", function(data){
        Feng.success("添加成功!");
        window.parent.CmTeacherfile.table.refresh();
        CmTeacherfileInfoDlg.close();
    },function(data){
        Feng.error("添加失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.cmTeacherfileInfoData);
    ajax.start();
}

/**
 * 提交修改
 */
CmTeacherfileInfoDlg.editSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/cmTeacherfile/update", function(data){
        Feng.success("修改成功!");
        window.parent.CmTeacherfile.table.refresh();
        CmTeacherfileInfoDlg.close();
    },function(data){
        Feng.error("修改失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.cmTeacherfileInfoData);
    ajax.start();
}

$(function() {

});
