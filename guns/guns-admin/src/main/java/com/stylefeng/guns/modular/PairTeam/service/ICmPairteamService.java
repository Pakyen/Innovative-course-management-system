package com.stylefeng.guns.modular.PairTeam.service;

import com.stylefeng.guns.modular.system.model.CmPairteam;
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
public interface ICmPairteamService extends IService<CmPairteam> {
    /**
     * 获取团队的信息
     */
    public List<Map<String,Object>> look_pairteam(String condition);

    /**
     * 获取用戶的Pair_id
     */
    public String userPair_id(@Param("id")Integer id);

    /**
     * 删除指定用户的结对ID
     */
    public void delete_pairId(@Param("id")Integer id);

    /**
     * 获取用戶的pairId
     */
    public String pt_the_pairId(@Param("pt_the_account")String pt_the_account);

    /**
     * 更新添加组员的pairId
     */
    public void pt_update_account(@Param("pt_the_account")String pt_the_account, @Param("the_pairId")String the_pairId);

    /**
     * 获取用户的结对小组的成员个数
     */
    public Integer ptcount(@Param("a")String a);
}
