package com.stylefeng.guns.modular.systemFile.controller;

import com.stylefeng.guns.core.base.controller.BaseController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.beans.factory.annotation.Autowired;
import com.stylefeng.guns.core.log.LogObjectHolder;
import org.springframework.web.bind.annotation.RequestParam;
import com.stylefeng.guns.modular.system.model.CmSysfile;
import com.stylefeng.guns.modular.systemFile.service.ICmSysfileService;

import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;
import java.io.File;
import java.io.IOException;

/**
 * 推荐资料控制器
 *
 * @author fengshuonan
 * @Date 2018-11-26 21:26:14
 */
@Controller
@RequestMapping("/cmSysfile")
public class CmSysfileController extends BaseController {

    private String PREFIX = "/systemFile/cmSysfile/";

    @Autowired
    private ICmSysfileService cmSysfileService;

    /**
     * 跳转到推荐资料首页
     */
    @RequestMapping("")
    public String index() {
        return PREFIX + "cmSysfile.html";
    }

    /**
     * 跳转到添加推荐资料
     */
    @RequestMapping("/cmSysfile_add")
    public String cmSysfileAdd() {
        return PREFIX + "cmSysfile_add.html";
    }

    /**
     * 跳转到添加推荐资料,自制造版本
     */
    @RequestMapping("/upload")
    public String cmSysfileUpload() {
        return PREFIX + "upload.html";
    }

    /**
     * 跳转到修改推荐资料
     */
    @RequestMapping("/cmSysfile_update/{cmSysfileId}")
    public String cmSysfileUpdate(@PathVariable Integer cmSysfileId, Model model) {
        CmSysfile cmSysfile = cmSysfileService.selectById(cmSysfileId);
        model.addAttribute("item",cmSysfile);
        LogObjectHolder.me().set(cmSysfile);
        return PREFIX + "cmSysfile_edit.html";
    }

    /**
     * 获取推荐资料列表
     */
    @RequestMapping(value = "/list")
    @ResponseBody
    public Object list(String condition) {
        return cmSysfileService.selectList(null);
    }

    /**
     * 新增推荐资料
     */
    @RequestMapping(value = "/add")
    @ResponseBody
        public Object add(CmSysfile cmSysfile) {
        cmSysfileService.insert(cmSysfile);
        return SUCCESS_TIP;
    }

    /**
     * 删除推荐资料
     */
    @RequestMapping(value = "/delete")
    @ResponseBody
    public Object delete(@RequestParam Integer cmSysfileId) {
        cmSysfileService.deleteById(cmSysfileId);
        return SUCCESS_TIP;
    }

    /**
     * 修改推荐资料
     */
    @RequestMapping(value = "/update")
    @ResponseBody
    public Object update(CmSysfile cmSysfile) {
        cmSysfileService.updateById(cmSysfile);
        return SUCCESS_TIP;
    }

    /**
     * 推荐资料详情
     */
    @RequestMapping(value = "/detail/{cmSysfileId}")
    @ResponseBody
    public Object detail(@PathVariable("cmSysfileId") Integer cmSysfileId) {
        return cmSysfileService.selectById(cmSysfileId);
    }

}
