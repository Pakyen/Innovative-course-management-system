/**
 * 初始化结对小组详情对话框
 */
var CmPairteamInfoDlg = {
    cmPairteamInfoData : {}
};

/**
 * 清除数据
 */
CmPairteamInfoDlg.clearData = function() {
    this.cmPairteamInfoData = {};
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
CmPairteamInfoDlg.set = function(key, val) {
    this.cmPairteamInfoData[key] = (typeof val == "undefined") ? $("#" + key).val() : val;
    return this;
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
CmPairteamInfoDlg.get = function(key) {
    return $("#" + key).val();
}

/**
 * 关闭此对话框
 */
CmPairteamInfoDlg.close = function() {
    parent.layer.close(window.parent.CmPairteam.layerIndex);
}

/**
 * 收集数据
 */
CmPairteamInfoDlg.collectData = function() {
    this
    .set('id')
    .set('account')
    .set('name')
    .set('teamId');
}

/**
 * 提交添加
 */
CmPairteamInfoDlg.addSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/cmPairteam/add", function(data){
        Feng.success(data+"!");
        window.parent.CmPairteam.table.refresh();
        CmPairteamInfoDlg.close();
    },function(data){
        Feng.error("添加失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.cmPairteamInfoData);
    ajax.start();
}

/**
 * 提交修改
 */
CmPairteamInfoDlg.editSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/cmPairteam/update", function(data){
        Feng.success("修改成功!");
        window.parent.CmPairteam.table.refresh();
        CmPairteamInfoDlg.close();
    },function(data){
        Feng.error("修改失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.cmPairteamInfoData);
    ajax.start();
}

$(function() {

});
