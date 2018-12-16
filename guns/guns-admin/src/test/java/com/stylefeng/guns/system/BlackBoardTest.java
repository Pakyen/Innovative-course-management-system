package com.stylefeng.guns.system;

import com.stylefeng.guns.base.BaseJunit;
import com.stylefeng.guns.modular.system.dao.NoticeMapper;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;
import java.util.Map;

import static org.junit.Assert.assertTrue;

/**
 * 首页通知展示测试
 *
 * @author fengshuonan
 * @date 2017-05-21 15:02
 */
public class BlackBoardTest extends BaseJunit {

    @Autowired
    NoticeMapper noticeMapper;

    @Test
    public void blackBoardTest(@RequestParam(required = false) Integer deptid) {
        List<Map<String, Object>> notices = noticeMapper.list(null,null,deptid);
        assertTrue(notices.size() > 0);
    }
}
