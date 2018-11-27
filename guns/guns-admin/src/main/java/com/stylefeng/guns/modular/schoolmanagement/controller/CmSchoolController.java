package com.stylefeng.guns.modular.schoolmanagement.controller;

import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.stylefeng.guns.core.base.controller.BaseController;
import com.stylefeng.guns.core.util.ToolUtil;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.beans.factory.annotation.Autowired;
import com.stylefeng.guns.core.log.LogObjectHolder;
import org.springframework.web.bind.annotation.RequestParam;
import com.stylefeng.guns.modular.system.model.CmSchool;
import com.stylefeng.guns.modular.schoolmanagement.service.ICmSchoolService;

/**
 * 学校管理控制器
 *
 * @author fengshuonan
 * @Date 2018-11-25 17:28:13
 */
@Controller
@RequestMapping("/cmSchool")
public class CmSchoolController extends BaseController {

    private String PREFIX = "/schoolmanagement/cmSchool/";

    @Autowired
    private ICmSchoolService cmSchoolService;

    /**
     * 跳转到学校管理首页
     */
    @RequestMapping("")
    public String index() {
        return PREFIX + "cmSchool.html";
    }

    /**
     * 跳转到添加学校管理
     */
    @RequestMapping("/cmSchool_add")
    public String cmSchoolAdd() {
        return PREFIX + "cmSchool_add.html";
    }

    /**
     * 跳转到修改学校管理
     */
    @RequestMapping("/cmSchool_update/{cmSchoolId}")
    public String cmSchoolUpdate(@PathVariable Integer cmSchoolId, Model model) {
        CmSchool cmSchool = cmSchoolService.selectById(cmSchoolId);
        model.addAttribute("item",cmSchool);
        LogObjectHolder.me().set(cmSchool);
        return PREFIX + "cmSchool_edit.html";
    }

    /**
     * 获取学校管理列表
     */
    @RequestMapping(value = "/list")
    @ResponseBody
    public Object list(String condition) {
        //按学校名称查询
        if(ToolUtil.isEmpty(condition)){
            return cmSchoolService.selectList(null);
        }
        else{
            EntityWrapper<CmSchool> entityWrapper = new EntityWrapper<>();
            Wrapper<CmSchool> wrapper = entityWrapper.like("school_name",condition);
            return cmSchoolService.selectList(wrapper);
        }
    }

    /**
     * 新增学校管理
     */
    @RequestMapping(value = "/add")
    @ResponseBody
    public Object add(CmSchool cmSchool) {
        cmSchoolService.insert(cmSchool);
        return SUCCESS_TIP;
    }

    /**
     * 删除学校管理
     */
    @RequestMapping(value = "/delete")
    @ResponseBody
    public Object delete(@RequestParam Integer cmSchoolId) {
        cmSchoolService.deleteById(cmSchoolId);
        return SUCCESS_TIP;
    }

    /**
     * 修改学校管理
     */
    @RequestMapping(value = "/update")
    @ResponseBody
    public Object update(CmSchool cmSchool) {
        cmSchoolService.updateById(cmSchool);
        return SUCCESS_TIP;
    }

    /**
     * 学校管理详情
     */
    @RequestMapping(value = "/detail/{cmSchoolId}")
    @ResponseBody
    public Object detail(@PathVariable("cmSchoolId") Integer cmSchoolId) {
        return cmSchoolService.selectById(cmSchoolId);
    }
}
