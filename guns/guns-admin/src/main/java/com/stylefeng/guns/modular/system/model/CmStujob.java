package com.stylefeng.guns.modular.system.model;

import com.baomidou.mybatisplus.enums.IdType;
import java.util.Date;
import com.baomidou.mybatisplus.annotations.TableId;
import com.baomidou.mybatisplus.annotations.TableField;
import com.baomidou.mybatisplus.activerecord.Model;
import com.baomidou.mybatisplus.annotations.TableName;
import java.io.Serializable;

/**
 * <p>
 * 学生提交的作业

 * </p>
 *
 * @author qqzj
 * @since 2018-12-19
 */
@TableName("cm_stujob")
public class CmStujob extends Model<CmStujob> {

    private static final long serialVersionUID = 1L;

    @TableId(value = "id", type = IdType.AUTO)
    private Integer id;
    /**
     * 作业编号
     */
    @TableField("homework_id")
    private Integer homeworkId;
    /**
     * 学生账号
     */
    @TableField("stu_id")
    private String stuId;
    /**
     * 作业名称
     */
    @TableField("file_name")
    private String fileName;
    /**
     * 文件路径
     */
    @TableField("file_path")
    private String filePath;
    /**
     * 分数
     */
    private Integer grade;
    /**
     * 是否锁定
     */
    @TableField("if_lock")
    private Integer ifLock;
    /**
     * 是否批改
     */
    @TableField("if_audit")
    private Integer ifAudit;
    /**
     * 提交时间
     */
    @TableField("submit_time")
    private Date submitTime;
    /**
     * 助教账号
     */
    @TableField("ass_id")
    private String assId;


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getHomeworkId() {
        return homeworkId;
    }

    public void setHomeworkId(Integer homeworkId) {
        this.homeworkId = homeworkId;
    }

    public String getStuId() {
        return stuId;
    }

    public void setStuId(String stuId) {
        this.stuId = stuId;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public String getFilePath() {
        return filePath;
    }

    public void setFilePath(String filePath) {
        this.filePath = filePath;
    }

    public Integer getGrade() {
        return grade;
    }

    public void setGrade(Integer grade) {
        this.grade = grade;
    }

    public Integer getIfLock() {
        return ifLock;
    }

    public void setIfLock(Integer ifLock) {
        this.ifLock = ifLock;
    }

    public Integer getIfAudit() {
        return ifAudit;
    }

    public void setIfAudit(Integer ifAudit) {
        this.ifAudit = ifAudit;
    }

    public Date getSubmitTime() {
        return submitTime;
    }

    public void setSubmitTime(Date submitTime) {
        this.submitTime = submitTime;
    }

    public String getAssId() {
        return assId;
    }

    public void setAssId(String assId) {
        this.assId = assId;
    }

    @Override
    protected Serializable pkVal() {
        return this.id;
    }

    @Override
    public String toString() {
        return "CmStujob{" +
        "id=" + id +
        ", homeworkId=" + homeworkId +
        ", stuId=" + stuId +
        ", fileName=" + fileName +
        ", filePath=" + filePath +
        ", grade=" + grade +
        ", ifLock=" + ifLock +
        ", ifAudit=" + ifAudit +
        ", submitTime=" + submitTime +
        ", assId=" + assId +
        "}";
    }
}
