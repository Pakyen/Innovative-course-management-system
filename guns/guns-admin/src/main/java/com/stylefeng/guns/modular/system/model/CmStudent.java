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
 * @since 2018-11-27
 */
@TableName("cm_student")
public class CmStudent extends Model<CmStudent> {

    private static final long serialVersionUID = 1L;

    private String id;
    @TableField("school_id")
    private Integer schoolId;
    @TableField("class_id")
    private Long classId;
    @TableField("Team_id")
    private Long teamId;
    @TableField("group_id")
    private Long groupId;
    private String password;
    @TableField("if_pm")
    private Integer ifPm;
    /**
     * 用来设置，是否该账号使用
     */
    @TableField("if_use")
    private Integer ifUse;
    /**
     * 学生对应的作业验收助教
     */
    @TableField("assistant_id")
    private String assistantId;
    private String telephone;
    private String email;
    private String name;


    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
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

    public Long getTeamId() {
        return teamId;
    }

    public void setTeamId(Long teamId) {
        this.teamId = teamId;
    }

    public Long getGroupId() {
        return groupId;
    }

    public void setGroupId(Long groupId) {
        this.groupId = groupId;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Integer getIfPm() {
        return ifPm;
    }

    public void setIfPm(Integer ifPm) {
        this.ifPm = ifPm;
    }

    public Integer getIfUse() {
        return ifUse;
    }

    public void setIfUse(Integer ifUse) {
        this.ifUse = ifUse;
    }

    public String getAssistantId() {
        return assistantId;
    }

    public void setAssistantId(String assistantId) {
        this.assistantId = assistantId;
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

    @Override
    protected Serializable pkVal() {
        return null;
    }

    @Override
    public String toString() {
        return "CmStudent{" +
        "id=" + id +
        ", schoolId=" + schoolId +
        ", classId=" + classId +
        ", teamId=" + teamId +
        ", groupId=" + groupId +
        ", password=" + password +
        ", ifPm=" + ifPm +
        ", ifUse=" + ifUse +
        ", assistantId=" + assistantId +
        ", telephone=" + telephone +
        ", email=" + email +
        ", name=" + name +
        "}";
    }
}
