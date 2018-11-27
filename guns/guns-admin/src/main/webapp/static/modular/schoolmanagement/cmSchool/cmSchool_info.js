/**
 * 初始化学校管理详情对话框
 */
var CmSchoolInfoDlg = {
    cmSchoolInfoData : {}
};

/**
 * 清除数据
 */
CmSchoolInfoDlg.clearData = function() {
    this.cmSchoolInfoData = {};
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
CmSchoolInfoDlg.set = function(key, val) {
    this.cmSchoolInfoData[key] = (typeof val == "undefined") ? $("#" + key).val() : val;
    return this;
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
CmSchoolInfoDlg.get = function(key) {
    return $("#" + key).val();
}

/**
 * 关闭此对话框
 */
CmSchoolInfoDlg.close = function() {
    parent.layer.close(window.parent.CmSchool.layerIndex);
}

/**
 * 收集数据
 */
CmSchoolInfoDlg.collectData = function() {
    this
    .set('id')
    .set('userId')
    .set('schoolName')
    .set('schoolType');
}

/**
 * 提交添加
 */
CmSchoolInfoDlg.addSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/cmSchool/add", function(data){
        Feng.success("添加成功!");
        window.parent.CmSchool.table.refresh();
        CmSchoolInfoDlg.close();
    },function(data){
        Feng.error("添加失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.cmSchoolInfoData);
    ajax.start();
}

/**
 * 提交修改
 */
CmSchoolInfoDlg.editSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/cmSchool/update", function(data){
        Feng.success("修改成功!");
        window.parent.CmSchool.table.refresh();
        CmSchoolInfoDlg.close();
    },function(data){
        Feng.error("修改失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.cmSchoolInfoData);
    ajax.start();
}

$(function() {

});
