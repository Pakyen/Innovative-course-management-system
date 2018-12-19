package com.stylefeng.guns.modular.checkjob.controller;

import com.stylefeng.guns.core.base.controller.BaseController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.beans.factory.annotation.Autowired;
import com.stylefeng.guns.core.log.LogObjectHolder;
import org.springframework.web.bind.annotation.RequestParam;
import com.stylefeng.guns.modular.system.model.CmStujob;
import com.stylefeng.guns.modular.checkjob.service.ICmStujobService;

/**
 * 查看作业控制器
 *
 * @author fengshuonan
 * @Date 2018-12-19 13:06:49
 */
@Controller
@RequestMapping("/cmStujob")
public class CmStujobController extends BaseController {

    private String PREFIX = "/checkjob/cmStujob/";

    @Autowired
    private ICmStujobService cmStujobService;

    /**
     * 跳转到查看作业首页
     */
    @RequestMapping("")
    public String index() {
        return PREFIX + "cmStujob.html";
    }

    /**
     * 跳转到添加查看作业
     */
    @RequestMapping("/cmStujob_add")
    public String cmStujobAdd() {
        return PREFIX + "cmStujob_add.html";
    }

    /**
     * 跳转到修改查看作业
     */
    @RequestMapping("/cmStujob_update/{cmStujobId}")
    public String cmStujobUpdate(@PathVariable Integer cmStujobId, Model model) {
        CmStujob cmStujob = cmStujobService.selectById(cmStujobId);
        model.addAttribute("item",cmStujob);
        LogObjectHolder.me().set(cmStujob);
        return PREFIX + "cmStujob_edit.html";
    }

    /**
     * 获取查看作业列表
     */
    @RequestMapping(value = "/list")
    @ResponseBody
    public Object list(String condition) {
        return cmStujobService.selectList(null);
    }

    /**
     * 新增查看作业
     */
    @RequestMapping(value = "/add")
    @ResponseBody
    public Object add(CmStujob cmStujob) {
        cmStujobService.insert(cmStujob);
        return SUCCESS_TIP;
    }

    /**
     * 删除查看作业
     */
    @RequestMapping(value = "/delete")
    @ResponseBody
    public Object delete(@RequestParam Integer cmStujobId) {
        cmStujobService.deleteById(cmStujobId);
        return SUCCESS_TIP;
    }

    /**
     * 修改查看作业
     */
    @RequestMapping(value = "/update")
    @ResponseBody
    public Object update(CmStujob cmStujob) {
        cmStujobService.updateById(cmStujob);
        return SUCCESS_TIP;
    }

    /**
     * 查看作业详情
     */
    @RequestMapping(value = "/detail/{cmStujobId}")
    @ResponseBody
    public Object detail(@PathVariable("cmStujobId") Integer cmStujobId) {
        return cmStujobService.selectById(cmStujobId);
    }
}
