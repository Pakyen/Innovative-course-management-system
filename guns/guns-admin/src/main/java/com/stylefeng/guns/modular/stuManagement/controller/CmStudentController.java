package com.stylefeng.guns.modular.stuManagement.controller;

import com.stylefeng.guns.core.base.controller.BaseController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.beans.factory.annotation.Autowired;
import com.stylefeng.guns.core.log.LogObjectHolder;
import org.springframework.web.bind.annotation.RequestParam;
import com.stylefeng.guns.modular.system.model.CmStudent;
import com.stylefeng.guns.modular.stuManagement.service.ICmStudentService;

/**
 * 学生管理控制器
 *
 * @author fengshuonan
 * @Date 2018-12-01 17:25:06
 */
@Controller
@RequestMapping("/cmStudent")
public class CmStudentController extends BaseController {

    private String PREFIX = "/stuManagement/cmStudent/";

    @Autowired
    private ICmStudentService cmStudentService;

    /**
     * 跳转到学生管理首页
     */
    @RequestMapping("")
    public String index() {
        return PREFIX + "cmStudent.html";
    }

    /**
     * 跳转到添加学生管理
     */
    @RequestMapping("/cmStudent_add")
    public String cmStudentAdd() {
        return PREFIX + "cmStudent_add.html";
    }

    /**
     * 跳转到修改学生管理
     */
    @RequestMapping("/cmStudent_update/{cmStudentId}")
    public String cmStudentUpdate(@PathVariable Integer cmStudentId, Model model) {
        CmStudent cmStudent = cmStudentService.selectById(cmStudentId);
        model.addAttribute("item",cmStudent);
        LogObjectHolder.me().set(cmStudent);
        return PREFIX + "cmStudent_edit.html";
    }

    /**
     * 获取学生管理列表
     */
    @RequestMapping(value = "/list")
    @ResponseBody
    public Object list(String condition) {
        return cmStudentService.selectList(null);
    }

    /**
     * 新增学生管理
     */
    @RequestMapping(value = "/add")
    @ResponseBody
    public Object add(CmStudent cmStudent) {
        cmStudentService.insert(cmStudent);
        return SUCCESS_TIP;
    }

    /**
     * 删除学生管理
     */
    @RequestMapping(value = "/delete")
    @ResponseBody
    public Object delete(@RequestParam Integer cmStudentId) {
        cmStudentService.deleteById(cmStudentId);
        return SUCCESS_TIP;
    }

    /**
     * 修改学生管理
     */
    @RequestMapping(value = "/update")
    @ResponseBody
    public Object update(CmStudent cmStudent) {
        cmStudentService.updateById(cmStudent);
        return SUCCESS_TIP;
    }

    /**
     * 学生管理详情
     */
    @RequestMapping(value = "/detail/{cmStudentId}")
    @ResponseBody
    public Object detail(@PathVariable("cmStudentId") Integer cmStudentId) {
        return cmStudentService.selectById(cmStudentId);
    }
}
