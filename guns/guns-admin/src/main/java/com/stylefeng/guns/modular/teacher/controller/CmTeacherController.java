package com.stylefeng.guns.modular.teacher.controller;

import com.stylefeng.guns.core.base.controller.BaseController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.beans.factory.annotation.Autowired;
import com.stylefeng.guns.core.log.LogObjectHolder;
import org.springframework.web.bind.annotation.RequestParam;
import com.stylefeng.guns.modular.system.model.CmTeacher;
import com.stylefeng.guns.modular.teacher.service.ICmTeacherService;

/**
 * 教师管理控制器
 *
 * @author fengshuonan
 * @Date 2018-12-18 16:17:04
 */
@Controller
@RequestMapping("/cmTeacher")
public class CmTeacherController extends BaseController {

    private String PREFIX = "/teacher/cmTeacher/";

    @Autowired
    private ICmTeacherService cmTeacherService;

    /**
     * 跳转到教师管理首页
     */
    @RequestMapping("")
    public String index() {
        return PREFIX + "cmTeacher.html";
    }

    /**
     * 跳转到添加教师管理
     */
    @RequestMapping("/cmTeacher_add")
    public String cmTeacherAdd() {
        return PREFIX + "cmTeacher_add.html";
    }

    /**
     * 跳转到修改教师管理
     */
    @RequestMapping("/cmTeacher_update/{cmTeacherId}")
    public String cmTeacherUpdate(@PathVariable Integer cmTeacherId, Model model) {
        CmTeacher cmTeacher = cmTeacherService.selectById(cmTeacherId);
        model.addAttribute("item",cmTeacher);
        LogObjectHolder.me().set(cmTeacher);
        return PREFIX + "cmTeacher_edit.html";
    }

    /**
     * 获取教师管理列表
     */
    @RequestMapping(value = "/list")
    @ResponseBody
    public Object list(String condition) {

        return cmTeacherService.selectList(null);
    }

    /**
     * 新增教师管理
     */
    @RequestMapping(value = "/add")
    @ResponseBody
    public Object add(CmTeacher cmTeacher) {
        cmTeacherService.insert(cmTeacher);
        return SUCCESS_TIP;
    }

    /**
     * 删除教师管理
     */
    @RequestMapping(value = "/delete")
    @ResponseBody
    public Object delete(@RequestParam Integer cmTeacherId) {
        cmTeacherService.deleteById(cmTeacherId);
        return SUCCESS_TIP;
    }

    /**
     * 修改教师管理
     */
    @RequestMapping(value = "/update")
    @ResponseBody
    public Object update(CmTeacher cmTeacher) {
        cmTeacherService.updateById(cmTeacher);
        return SUCCESS_TIP;
    }

    /**
     * 教师管理详情
     */
    @RequestMapping(value = "/detail/{cmTeacherId}")
    @ResponseBody
    public Object detail(@PathVariable("cmTeacherId") Integer cmTeacherId) {
        return cmTeacherService.selectById(cmTeacherId);
    }
}
