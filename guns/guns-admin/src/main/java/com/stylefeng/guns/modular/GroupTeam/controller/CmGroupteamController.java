package com.stylefeng.guns.modular.GroupTeam.controller;

import com.stylefeng.guns.core.base.controller.BaseController;
import com.stylefeng.guns.core.shiro.ShiroKit;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.beans.factory.annotation.Autowired;
import com.stylefeng.guns.core.log.LogObjectHolder;
import org.springframework.web.bind.annotation.RequestParam;
import com.stylefeng.guns.modular.system.model.CmGroupteam;
import com.stylefeng.guns.modular.GroupTeam.service.ICmGroupteamService;

/**
 * 团队小组控制器
 *
 * @author fengshuonan
 * @Date 2018-12-21 21:47:52
 */
@Controller
@RequestMapping("/cmGroupteam")
public class CmGroupteamController extends BaseController {

    private String PREFIX = "/GroupTeam/cmGroupteam/";

    @Autowired
    private ICmGroupteamService cmGroupteamService;

    /**
     * 跳转到团队小组首页
     */
    @RequestMapping("")
    public String index() {
        return PREFIX + "cmGroupteam.html";
    }

    /**
     * 跳转到添加团队小组
     */
    @RequestMapping("/cmGroupteam_add")
    public String cmGroupteamAdd() {
        return PREFIX + "cmGroupteam_add.html";
    }

    /**
     * 跳转到修改团队小组
     */
    @RequestMapping("/cmGroupteam_update/{cmGroupteamId}")
    public String cmGroupteamUpdate(@PathVariable Integer cmGroupteamId, Model model) {
        CmGroupteam cmGroupteam = cmGroupteamService.selectById(cmGroupteamId);
        model.addAttribute("item",cmGroupteam);
        LogObjectHolder.me().set(cmGroupteam);
        return PREFIX + "cmGroupteam_edit.html";
    }

    /**
     * 获取团队小组列表
     */
    @RequestMapping(value = "/list")
    @ResponseBody
    public Object list(String condition) {
        if(condition==null) {
            condition = "";
        }
        Integer loginUserId = ShiroKit.getUser().getId();
        condition =cmGroupteamService.userGroup_id(loginUserId);
        return cmGroupteamService.look_groupteam(condition);
    }

    /**
     * 新增团队小组
     */
    @RequestMapping(value = "/add")
    @ResponseBody
    public Object add(CmGroupteam cmGroupteam) {
        String gt_the_account = cmGroupteam.getAccount();
        String a = cmGroupteamService.gt_the_groupId(gt_the_account);
        Integer loginUserId = ShiroKit.getUser().getId();
        String the_groupId = cmGroupteamService.userGroup_id(loginUserId);
        Integer gt_pnum = cmGroupteamService.gtcount(the_groupId);
        String the_roleid = cmGroupteamService.gt_the_roleid(loginUserId);
        System.out.println(the_roleid);
        if(!the_roleid.equals("6")){
            return "您不是组长！";
        }
        else{
            if(gt_pnum<7){
                if((a == null)||(a.isEmpty())){
                    cmGroupteamService.gt_update_account(gt_the_account, the_groupId);
                    return "添加成功";
                }
            }
            return "添加失败";
        }
    }

    /**
     * 删除团队小组
     */
    @RequestMapping(value = "/delete")
    @ResponseBody
    public Object delete(@RequestParam Integer cmGroupteamId) {
        Integer loginUserId = ShiroKit.getUser().getId();
        String the_roleid = cmGroupteamService.gt_the_roleid(loginUserId);
        if(!the_roleid.equals("6")){
            return "您不是组长";
        }
        else{
            Integer the_id = cmGroupteamService.selectById(cmGroupteamId).getId();
            cmGroupteamService.delete_groupId(the_id);
            return "删除成功";
        }
    }

    /**
     * 修改团队小组
     */
    @RequestMapping(value = "/update")
    @ResponseBody
    public Object update(CmGroupteam cmGroupteam) {
        cmGroupteamService.updateById(cmGroupteam);
        return SUCCESS_TIP;
    }

    /**
     * 团队小组详情
     */
    @RequestMapping(value = "/detail/{cmGroupteamId}")
    @ResponseBody
    public Object detail(@PathVariable("cmGroupteamId") Integer cmGroupteamId) {
        return cmGroupteamService.selectById(cmGroupteamId);
    }
}
