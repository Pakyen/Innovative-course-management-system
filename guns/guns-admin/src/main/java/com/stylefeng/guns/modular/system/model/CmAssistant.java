package com.stylefeng.guns.modular.system.model;

import com.baomidou.mybatisplus.annotations.TableField;
import com.baomidou.mybatisplus.activerecord.Model;
import com.baomidou.mybatisplus.annotations.TableName;
import java.io.Serializable;

/**
 * <p>
 * VIEW
 * </p>
 *
 * @author qqzj
 * @since 2018-12-01
 */
@TableName("cm_assistant")
public class CmAssistant extends Model<CmAssistant> {

    private static final long serialVersionUID = 1L;

    private Integer id;
    private String account;
    @TableField("school_id")
    private Integer schoolId;
    @TableField("class_id")
    private Long classId;
    private String password;
    /**
     * 用来设置，是否该账号使用
     */
    @TableField("if_use")
    private Integer ifUse;
    /**
     * 0
     */
    private String telephone;
    private String email;
    private String name;
    /**
     * false的话就是助教
     */
    @TableField("is_stu")
    private Integer isStu;


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

    public Integer getSchoolId() {
        return schoolId;
    }

    public void setSchoolId(Integer schoolId) {
        this.schoolId = schoolId;
    }

    public Long getClassId() {
        return classId;
    }

    public void setClassId(Long classId) {
        this.classId = classId;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Integer getIfUse() {
        return ifUse;
    }

    public void setIfUse(Integer ifUse) {
        this.ifUse = ifUse;
    }

    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getIsStu() {
        return isStu;
    }

    public void setIsStu(Integer isStu) {
        this.isStu = isStu;
    }

    @Override
    protected Serializable pkVal() {
        return null;
    }

    @Override
    public String toString() {
        return "CmAssistant{" +
        "id=" + id +
        ", account=" + account +
        ", schoolId=" + schoolId +
        ", classId=" + classId +
        ", password=" + password +
        ", ifUse=" + ifUse +
        ", telephone=" + telephone +
        ", email=" + email +
        ", name=" + name +
        ", isStu=" + isStu +
        "}";
    }
}
