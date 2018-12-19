package com.stylefeng.guns.modular.stuupload.controller;

import com.stylefeng.guns.core.base.controller.BaseController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.beans.factory.annotation.Autowired;
import com.stylefeng.guns.core.log.LogObjectHolder;
import org.springframework.web.bind.annotation.RequestParam;
import com.stylefeng.guns.modular.system.model.CmStuupload;
import com.stylefeng.guns.modular.stuupload.service.ICmStuuploadService;

/**
 * 上传作业控制器
 *
 * @author fengshuonan
 * @Date 2018-12-19 11:06:47
 */
@Controller
@RequestMapping("/cmStuupload")
public class CmStuuploadController extends BaseController {

    private String PREFIX = "/stuupload/cmStuupload/";

    @Autowired
    private ICmStuuploadService cmStuuploadService;

    /**
     * 跳转到上传作业首页
     */
    @RequestMapping("")
    public String index() {
        return PREFIX + "cmStuupload.html";
    }

    /**
     * 跳转到添加上传作业
     */
    @RequestMapping("/cmStuupload_add")
    public String cmStuuploadAdd() {
        return PREFIX + "cmStuupload_add.html";
    }


    /**
     * 获取上传作业列表
     */
    @RequestMapping(value = "/list")
    @ResponseBody
    public Object list(String condition) {
        return cmStuuploadService.selectList(null);
    }

    /**
     * 新增上传作业
     */
    @RequestMapping(value = "/add")
    @ResponseBody
    public Object add(CmStuupload cmStuupload) {
        cmStuuploadService.insert(cmStuupload);
        return SUCCESS_TIP;
    }

    /**
     * 删除上传作业
     */
    @RequestMapping(value = "/delete")
    @ResponseBody
    public Object delete(@RequestParam Integer cmStuuploadId) {
        cmStuuploadService.deleteById(cmStuuploadId);
        return SUCCESS_TIP;
    }


    /**
     * 上传作业详情
     */
    @RequestMapping(value = "/detail/{cmStuuploadId}")
    @ResponseBody
    public Object detail(@PathVariable("cmStuuploadId") Integer cmStuuploadId) {
        return cmStuuploadService.selectById(cmStuuploadId);
    }
}
