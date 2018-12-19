package com.stylefeng.guns.modular.PM.controller;

import com.stylefeng.guns.core.base.controller.BaseController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.beans.factory.annotation.Autowired;
import com.stylefeng.guns.core.log.LogObjectHolder;
import org.springframework.web.bind.annotation.RequestParam;
import com.stylefeng.guns.modular.system.model.CmPm;
import com.stylefeng.guns.modular.PM.service.ICmPmService;

/**
 * PM管理控制器
 *
 * @author fengshuonan
 * @Date 2018-12-18 13:45:05
 */
@Controller
@RequestMapping("/cmPm")
public class CmPmController extends BaseController {

    private String PREFIX = "/PM/cmPm/";

    @Autowired
    private ICmPmService cmPmService;

    /**
     * 跳转到PM管理首页
     */
    @RequestMapping("")
    public String index() {
        return PREFIX + "cmPm.html";
    }

    /**
     * 跳转到添加PM管理
     */
    @RequestMapping("/cmPm_add")
    public String cmPmAdd() {
        return PREFIX + "cmPm_add.html";
    }

    /**
     * 跳转到修改PM管理
     */
    @RequestMapping("/cmPm_update/{cmPmId}")
    public String cmPmUpdate(@PathVariable Integer cmPmId, Model model) {
        CmPm cmPm = cmPmService.selectById(cmPmId);
        model.addAttribute("item",cmPm);
        LogObjectHolder.me().set(cmPm);
        return PREFIX + "cmPm_edit.html";
    }

    /**
     * 获取PM管理列表
     */
    @RequestMapping(value = "/list")
    @ResponseBody
    public Object list(String condition) {
        return cmPmService.selectList(null);
    }

    /**
     * 新增PM管理
     */
    @RequestMapping(value = "/add")
    @ResponseBody
    public Object add(CmPm cmPm) {
        cmPmService.insert(cmPm);
        return SUCCESS_TIP;
    }

    /**
     * 删除PM管理
     */
    @RequestMapping(value = "/delete")
    @ResponseBody
    public Object delete(@RequestParam Integer cmPmId) {
        cmPmService.deleteById(cmPmId);
        return SUCCESS_TIP;
    }

    /**
     * 修改PM管理
     */
    @RequestMapping(value = "/update")
    @ResponseBody
    public Object update(CmPm cmPm) {
        cmPmService.updateById(cmPm);
        return SUCCESS_TIP;
    }

    /**
     * PM管理详情
     */
    @RequestMapping(value = "/detail/{cmPmId}")
    @ResponseBody
    public Object detail(@PathVariable("cmPmId") Integer cmPmId) {
        return cmPmService.selectById(cmPmId);
    }
}
