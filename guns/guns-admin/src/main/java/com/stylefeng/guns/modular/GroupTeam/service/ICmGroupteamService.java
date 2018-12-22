package com.stylefeng.guns.modular.GroupTeam.service;

import com.stylefeng.guns.modular.system.model.CmGroupteam;
import com.baomidou.mybatisplus.service.IService;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

/**
 * <p>
 * VIEW 服务类
 * </p>
 *
 * @author yz
 * @since 2018-12-21
 */
public interface ICmGroupteamService extends IService<CmGroupteam> {
    /**
     * 获取团队的信息
     */
    public List<Map<String,Object>> look_groupteam(String condition);

    /**
     * 获取用戶的Group_id
     */
    public String userGroup_id(@Param("id")Integer id);

    /**
     * 删除指定用户的团队ID
     */
    public void delete_groupId(@Param("id")Integer id);

    /**
     * 获取用戶的groupId
     */
    public String gt_the_groupId(@Param("gt_the_account")String gt_the_account);

    /**
     * 更新添加组员的groupId
     */
    public void gt_update_account(@Param("gt_the_account")String gt_the_account, @Param("the_groupId")String the_groupId);

    /**
     * 获取用户的团队小组的成员个数
     */
    public Integer gtcount(@Param("a")String a);

    /**
     * 获取用戶的roleid
     */
    public String gt_the_roleid(@Param("id")Integer id);
}
