package com.stylefeng.guns.modular.system.dao;

import com.baomidou.mybatisplus.mapper.BaseMapper;
import com.stylefeng.guns.core.datascope.DataScope;
import com.stylefeng.guns.modular.system.model.Notice;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

/**
 * <p>
 * 通知表 Mapper 接口
 * </p>
 *
 * @author stylefeng
 * @since 2017-07-11
 */
public interface NoticeMapper extends BaseMapper<Notice> {

    /**
     * 根据部门条件获取通知列表
     */
    List<Map<String, Object>> list(@Param("dataScope") DataScope dataScope, @Param("condition") String condition,@Param("deptid") Integer deptid);
//    /**
//     * 获取通知列表
//     */
//    List<Map<String, Object>> list(@Param("condition") String condition);

}