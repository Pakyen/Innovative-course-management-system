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
@TableName("cm_assistant")
public class CmAssistant extends Model<CmAssistant> {

    private static final long serialVersionUID = 1L;

    private String id;
    @TableField("school_id")
    private Integer schoolId;
    @TableField("class_id")
    private Long classId;
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
        return "CmAssistant{" +
        "id=" + id +
        ", schoolId=" + schoolId +
        ", classId=" + classId +
        ", telephone=" + telephone +
        ", email=" + email +
        ", name=" + name +
        "}";
    }
}
