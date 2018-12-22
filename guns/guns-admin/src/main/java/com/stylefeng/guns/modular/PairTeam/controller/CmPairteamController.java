package com.stylefeng.guns.modular.PairTeam.controller;

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
import com.stylefeng.guns.modular.system.model.CmPairteam;
import com.stylefeng.guns.modular.PairTeam.service.ICmPairteamService;

/**
 * 结对小组控制器
 *
 * @author fengshuonan
 * @Date 2018-12-21 21:51:58
 */
@Controller
@RequestMapping("/cmPairteam")
public class CmPairteamController extends BaseController {

    private String PREFIX = "/PairTeam/cmPairteam/";

    @Autowired
    private ICmPairteamService cmPairteamService;

    /**
     * 跳转到结对小组首页
     */
    @RequestMapping("")
    public String index() {
        return PREFIX + "cmPairteam.html";
    }

    /**
     * 跳转到添加结对小组
     */
    @RequestMapping("/cmPairteam_add")
    public String cmPairteamAdd() {
        return PREFIX + "cmPairteam_add.html";
    }

    /**
     * 跳转到修改结对小组
     */
    @RequestMapping("/cmPairteam_update/{cmPairteamId}")
    public String cmPairteamUpdate(@PathVariable Integer cmPairteamId, Model model) {
        CmPairteam cmPairteam = cmPairteamService.selectById(cmPairteamId);
        model.addAttribute("item",cmPairteam);
        LogObjectHolder.me().set(cmPairteam);
        return PREFIX + "cmPairteam_edit.html";
    }

    /**
     * 获取结对小组列表
     */
    @RequestMapping(value = "/list")
    @ResponseBody
    public Object list(String condition) {
        if(condition==null) {
            condition = "";
        }
        Integer loginUserId = ShiroKit.getUser().getId();
        condition =cmPairteamService.userPair_id(loginUserId);
        return cmPairteamService.look_pairteam(condition);
    }

    /**
     * 新增结对小组
     */
    @RequestMapping(value = "/add")
    @ResponseBody
    public Object add(CmPairteam cmPairteam) {
        String pt_the_account = cmPairteam.getAccount();
        String pt_user_account = ShiroKit.getUser().getAccount();
        String a = cmPairteamService.pt_the_pairId(pt_the_account);
        String b = cmPairteamService.pt_the_pairId(pt_user_account);
//        Integer loginUserId = ShiroKit.getUser().getId();
//        String the_pairId = cmPairteamService.userPair_id(loginUserId);
//        Integer pt_pnum = cmPairteamService.ptcount(the_pairId);

        if(((a == null)||(a.isEmpty()))&&((b == null)||(b.isEmpty()))){
            cmPairteamService.pt_update_account(pt_user_account, pt_user_account);
            cmPairteamService.pt_update_account(pt_the_account, pt_user_account);
            return "添加成功";
        }
        else{
            return "添加失败";
        }
    }

    /**
     * 删除结对小组
     */
    @RequestMapping(value = "/delete")
    @ResponseBody
    public Object delete(@RequestParam Integer cmPairteamId) {
        Integer loginUserId = ShiroKit.getUser().getId();
        Integer the_id = cmPairteamService.selectById(cmPairteamId).getId();
        cmPairteamService.delete_pairId(the_id);
        cmPairteamService.delete_pairId(loginUserId);
        return "删除成功";
    }

    /**
     * 修改结对小组
     */
    @RequestMapping(value = "/update")
    @ResponseBody
    public Object update(CmPairteam cmPairteam) {
        cmPairteamService.updateById(cmPairteam);
        return SUCCESS_TIP;
    }

    /**
     * 结对小组详情
     */
    @RequestMapping(value = "/detail/{cmPairteamId}")
    @ResponseBody
    public Object detail(@PathVariable("cmPairteamId") Integer cmPairteamId) {
        return cmPairteamService.selectById(cmPairteamId);
    }
}
