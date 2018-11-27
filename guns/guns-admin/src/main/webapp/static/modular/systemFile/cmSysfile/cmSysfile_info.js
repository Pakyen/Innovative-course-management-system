/**
 * 初始化推荐资料详情对话框
 */
var CmSysfileInfoDlg = {
    cmSysfileInfoData : {}
};

/**
 * 清除数据
 */
CmSysfileInfoDlg.clearData = function() {
    this.cmSysfileInfoData = {};
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
CmSysfileInfoDlg.set = function(key, val) {
    this.cmSysfileInfoData[key] = (typeof val == "undefined") ? $("#" + key).val() : val;
    return this;
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
CmSysfileInfoDlg.get = function(key) {
    return $("#" + key).val();
}

/**
 * 关闭此对话框
 */
CmSysfileInfoDlg.close = function() {
    parent.layer.close(window.parent.CmSysfile.layerIndex);
}

/**
 * 收集数据
 */
CmSysfileInfoDlg.collectData = function() {
    this
    .set('id')
    .set('userId')
    .set('fileName')
    .set('filePath');
}

/**
 * 提交添加
 */
CmSysfileInfoDlg.addSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/cmSysfile/add", function(data){
        Feng.success("添加成功!");
        window.parent.CmSysfile.table.refresh();
        CmSysfileInfoDlg.close();
    },function(data){
        Feng.error("添加失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.cmSysfileInfoData);
    ajax.start();
}

/**
 * 提交修改
 */
CmSysfileInfoDlg.editSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/cmSysfile/update", function(data){
        Feng.success("修改成功!");
        window.parent.CmSysfile.table.refresh();
        CmSysfileInfoDlg.close();
    },function(data){
        Feng.error("修改失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.cmSysfileInfoData);
    ajax.start();
}

$(function() {

});
