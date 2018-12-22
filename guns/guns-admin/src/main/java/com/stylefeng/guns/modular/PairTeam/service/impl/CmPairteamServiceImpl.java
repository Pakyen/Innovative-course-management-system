package com.stylefeng.guns.modular.PairTeam.service.impl;

import com.stylefeng.guns.modular.system.model.CmPairteam;
import com.stylefeng.guns.modular.system.dao.CmPairteamMapper;
import com.stylefeng.guns.modular.PairTeam.service.ICmPairteamService;
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
public class CmPairteamServiceImpl extends ServiceImpl<CmPairteamMapper, CmPairteam> implements ICmPairteamService {
    /**
     * 获取团队的信息
     */
    @Override
    public List<Map<String,Object>> look_pairteam(String condition){return this.baseMapper.look_pairteam(condition);}

    /**
     * 获取用戶的Pair_id
     */
    public String userPair_id(@Param("id")Integer id){
        return  this.baseMapper.userPair_id(id);
    }

    /**
     * 删除指定用户的结对ID
     */
    public void delete_pairId(@Param("id")Integer id){
        this.baseMapper.delete_pairId(id);
    }

    /**
     * 获取用戶的pairId
     */
    public String pt_the_pairId(@Param("pt_the_account")String pt_the_account){ return  this.baseMapper.pt_the_pairId(pt_the_account); }

    /**
     * 更新添加组员的pairId
     */
    public void pt_update_account(@Param("pt_the_account")String pt_the_account, @Param("the_pairId")String the_pairId){ this.baseMapper.pt_update_account(pt_the_account, the_pairId); }

    /**
     * 获取用户的结对小组的成员个数
     */
    public Integer ptcount(@Param("a")String a){ return  this.baseMapper.ptcount(a); }
}
