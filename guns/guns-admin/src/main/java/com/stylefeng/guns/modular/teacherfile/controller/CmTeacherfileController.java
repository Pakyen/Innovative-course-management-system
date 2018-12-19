package com.stylefeng.guns.modular.teacherfile.controller;

import com.stylefeng.guns.core.base.controller.BaseController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.beans.factory.annotation.Autowired;
import com.stylefeng.guns.core.log.LogObjectHolder;
import org.springframework.web.bind.annotation.RequestParam;
import com.stylefeng.guns.modular.system.model.CmTeacherfile;
import com.stylefeng.guns.modular.teacherfile.service.ICmTeacherfileService;

/**
 * 个人资料控制器
 *
 * @author fengshuonan
 * @Date 2018-12-19 11:15:29
 */
@Controller
@RequestMapping("/cmTeacherfile")
public class CmTeacherfileController extends BaseController {

    private String PREFIX = "/teacherfile/cmTeacherfile/";

    @Autowired
    private ICmTeacherfileService cmTeacherfileService;

    /**
     * 跳转到个人资料首页
     */
    @RequestMapping("")
    public String index() {
        return PREFIX + "cmTeacherfile.html";
    }

    /**
     * 跳转到添加个人资料
     */
    @RequestMapping("/cmTeacherfile_add")
    public String cmTeacherfileAdd() {
        return PREFIX + "cmTeacherfile_add.html";
    }

    /**
     * 跳转到修改个人资料
     */
    @RequestMapping("/cmTeacherfile_update/{cmTeacherfileId}")
    public String cmTeacherfileUpdate(@PathVariable Integer cmTeacherfileId, Model model) {
        CmTeacherfile cmTeacherfile = cmTeacherfileService.selectById(cmTeacherfileId);
        model.addAttribute("item",cmTeacherfile);
        LogObjectHolder.me().set(cmTeacherfile);
        return PREFIX + "cmTeacherfile_edit.html";
    }

    /**
     * 获取个人资料列表
     */
    @RequestMapping(value = "/list")
    @ResponseBody
    public Object list(String condition) {
        return cmTeacherfileService.selectList(null);
    }

    /**
     * 新增个人资料
     */
    @RequestMapping(value = "/add")
    @ResponseBody
    public Object add(CmTeacherfile cmTeacherfile) {
        cmTeacherfileService.insert(cmTeacherfile);
        return SUCCESS_TIP;
    }

    /**
     * 删除个人资料
     */
    @RequestMapping(value = "/delete")
    @ResponseBody
    public Object delete(@RequestParam Integer cmTeacherfileId) {
        cmTeacherfileService.deleteById(cmTeacherfileId);
        return SUCCESS_TIP;
    }

    /**
     * 修改个人资料
     */
    @RequestMapping(value = "/update")
    @ResponseBody
    public Object update(CmTeacherfile cmTeacherfile) {
        cmTeacherfileService.updateById(cmTeacherfile);
        return SUCCESS_TIP;
    }

    /**
     * 个人资料详情
     */
    @RequestMapping(value = "/detail/{cmTeacherfileId}")
    @ResponseBody
    public Object detail(@PathVariable("cmTeacherfileId") Integer cmTeacherfileId) {
        return cmTeacherfileService.selectById(cmTeacherfileId);
    }
}
