/**
 * 初始化团队小组详情对话框
 */
var CmGroupteamInfoDlg = {
    cmGroupteamInfoData : {}
};

/**
 * 清除数据
 */
CmGroupteamInfoDlg.clearData = function() {
    this.cmGroupteamInfoData = {};
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
CmGroupteamInfoDlg.set = function(key, val) {
    this.cmGroupteamInfoData[key] = (typeof val == "undefined") ? $("#" + key).val() : val;
    return this;
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
CmGroupteamInfoDlg.get = function(key) {
    return $("#" + key).val();
}

/**
 * 关闭此对话框
 */
CmGroupteamInfoDlg.close = function() {
    parent.layer.close(window.parent.CmGroupteam.layerIndex);
}

/**
 * 收集数据
 */
CmGroupteamInfoDlg.collectData = function() {
    this
    .set('id')
    .set('account')
    .set('name')
    .set('roleid')
    .set('groupId');
}

/**
 * 提交添加
 */
CmGroupteamInfoDlg.addSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/cmGroupteam/add", function(data){
        Feng.success(data+"!");
        window.parent.CmGroupteam.table.refresh();
        CmGroupteamInfoDlg.close();
    },function(data){
        Feng.error("添加失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.cmGroupteamInfoData);
    ajax.start();
}

/**
 * 提交修改
 */
CmGroupteamInfoDlg.editSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/cmGroupteam/update", function(data){
        Feng.success("修改成功!");
        window.parent.CmGroupteam.table.refresh();
        CmGroupteamInfoDlg.close();
    },function(data){
        Feng.error("修改失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.cmGroupteamInfoData);
    ajax.start();
}

$(function() {

});
