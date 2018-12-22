package com.stylefeng.guns.modular.system.model;

import com.baomidou.mybatisplus.activerecord.Model;
import com.baomidou.mybatisplus.annotations.TableName;
import java.io.Serializable;

/**
 * <p>
 * VIEW
 * </p>
 *
 * @author yz
 * @since 2018-12-21
 */
@TableName("cm_groupteam")
public class CmGroupteam extends Model<CmGroupteam> {

    private static final long serialVersionUID = 1L;

    /**
     * 主键id
     */
    private Integer id;
    /**
     * 账号
     */
    private String account;
    /**
     * 名字
     */
    private String name;
    /**
     * 角色id
     */
    private String roleid;
    private String groupId;


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getAccount() {
        return account;
    }

    public void setAccount(String account) {
        this.account = account;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getRoleid() {
        return roleid;
    }

    public void setRoleid(String roleid) {
        this.roleid = roleid;
    }

    public String getGroupId() {
        return groupId;
    }

    public void setGroupId(String groupId) {
        this.groupId = groupId;
    }

    @Override
    protected Serializable pkVal() {
        return null;
    }

    @Override
    public String toString() {
        return "CmGroupteam{" +
        "id=" + id +
        ", account=" + account +
        ", name=" + name +
        ", roleid=" + roleid +
        ", groupId=" + groupId +
        "}";
    }
}
