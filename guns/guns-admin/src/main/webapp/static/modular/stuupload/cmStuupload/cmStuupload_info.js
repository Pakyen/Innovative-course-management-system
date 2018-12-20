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
    $(document).ready(function(){
        $('#fileupload').fileupload({
            url: Feng.ctxPath + "/cmStuupload/add",
            dataType: 'json',
            autoUpload: true,
            acceptFileTypes: /(\.|\/)(apk)$/i,
            maxFileSize: 999000,
            // Enable image resizing, except for Android and Opera,
            // which actually support image resizing, but fail to
            // send Blob objects via XHR requests:
            disableImageResize: /Android(?!.*Chrome)|Opera/.test(window.navigator.userAgent),
            previewMaxWidth: 100,
            previewMaxHeight: 100,
            previewCrop: true
        }).on('fileuploadprogressall',function (e,data) {
            var progress = parseInt(data.loaded / data.total * 100, 10);
            $('#progress.bar').css(
                'width',
                progress + '%'
            );
            //当达到100时，进度条消失
            if (progress==100){
                $('#progress.bar').css('width', '0%');
            }
        }).on('fileuploadadd', function (e, data) {
            //console.log("fileuploadadd:"+data);
            data.context = $('<div/>').appendTo('#files');
            $.each(data.files, function (index, file) {
                var node = $('<p/>').append($('<span/>').text(file.name));
                node.appendTo(data.context);
            });
            data.submit();
            layer.load(0, {shade: [0.1,'#fff']}); //0代表加载的风格，支持0-2
        }).on('fileuploaddone', function (e, data) {
            layer.closeAll();
            console.log(data.result);
            if (data.result != null && data.result.code == 200) {
                document.getElementById('files').innerHTML = null;
                $('#address').val(data.result.data);
                $('#fileSize').val(data.result.fileSize);
                console.log("wenjiandaxiao"+data.result.fileSize)
                $('#fileSize').attr("type","text");
                $('#address').attr("type","text");
                Feng.success("上传成功!");
            } else {
                Feng.error("上传失败!" + data.result.data + "!");
            }
        }).on('fileuploadfail', function (e, data) {
            Feng.error("上传异常!" + data + "!");
        }).prop('disabled', !$.support.fileInput).parent().addClass($.support.fileInput ? undefined : 'disabled');
    });

    // this.clearData();
    // this.collectData();
    //
    // //提交信息
    // var ajax = new $ax(Feng.ctxPath + "/cmStuupload/add", function(data){
    //     Feng.success("添加成功!");
    //     window.parent.CmStuupload.table.refresh();
    //     CmStuuploadInfoDlg.close();
    // },function(data){
    //     Feng.error("添加失败!" + data.responseJSON.message + "!");
    // });
    // ajax.set(this.cmStuuploadInfoData);
    // ajax.start();
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
