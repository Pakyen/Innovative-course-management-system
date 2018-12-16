package com.stylefeng.guns.modular.system.controller;

import com.stylefeng.guns.core.base.controller.BaseController;
import com.stylefeng.guns.core.datascope.DataScope;
import com.stylefeng.guns.core.shiro.ShiroKit;
import com.stylefeng.guns.modular.system.service.INoticeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;
import java.util.Map;

/**
 * 总览信息
 *
 * @author fengshuonan
 * @Date 2017年3月4日23:05:54
 */
@Controller
@RequestMapping("/blackboard")
public class BlackboardController extends BaseController {

    @Autowired
    private INoticeService noticeService;

    /**
     * 跳转到黑板
     */
    @RequestMapping("")
    public String blackboard(Model model,String condition,Integer deptid) {
        List<Map<String, Object>> notices = null;
        if (ShiroKit.isAdmin()) {
            notices = this.noticeService.list(null,condition,deptid);
//            return super.warpObject(new NoticeWrapper(list));
        } else {
            DataScope dataScope = new DataScope(ShiroKit.getDeptDataScope());
            notices = this.noticeService.list(dataScope,condition,deptid);
//            return super.warpObject(new NoticeWrapper(list));
        }

        model.addAttribute("noticeList", notices);
        return "/blackboard.html";
    }
}
