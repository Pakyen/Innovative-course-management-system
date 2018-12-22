package com.stylefeng.guns.modular.GroupTeam.service.impl;

import com.stylefeng.guns.modular.system.model.CmGroupteam;
import com.stylefeng.guns.modular.system.dao.CmGroupteamMapper;
import com.stylefeng.guns.modular.GroupTeam.service.ICmGroupteamService;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

/**
 * <p>
 * VIEW 服务实现类
 * </p>
 *
 * @author yz
 * @since 2018-12-21
 */
@Service
public class CmGroupteamServiceImpl extends ServiceImpl<CmGroupteamMapper, CmGroupteam> implements ICmGroupteamService {
    /**
     * 获取团队的信息
     */
    @Override
    public List<Map<String,Object>> look_groupteam(String condition){return this.baseMapper.look_groupteam(condition);}

    /**
     * 获取用戶的Group_id
     */
    public String userGroup_id(@Param("id")Integer id){
        return  this.baseMapper.userGroup_id(id);
    }

    /**
     * 删除指定用户的团队ID
     */
    public void delete_groupId(@Param("id")Integer id){
        this.baseMapper.delete_groupId(id);
    }

    /**
     * 获取用戶的groupId
     */
    public String gt_the_groupId(@Param("gt_the_account")String gt_the_account){ return  this.baseMapper.gt_the_groupId(gt_the_account); }

    /**
     * 更新添加组员的groupId
     */
    public void gt_update_account(@Param("gt_the_account")String gt_the_account, @Param("the_groupId")String the_groupId){ this.baseMapper.gt_update_account(gt_the_account, the_groupId); }

    /**
     * 获取用户的团队小组的成员个数
     */
    public Integer gtcount(@Param("a")String a){ return  this.baseMapper.gtcount(a); }

    /**
     * 获取用戶的roleid
     */
    public String gt_the_roleid(@Param("id")Integer id){ return  this.baseMapper.gt_the_roleid(id); }
}
