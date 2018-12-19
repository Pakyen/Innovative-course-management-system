package com.stylefeng.guns.modular.system.model;

import java.util.Date;
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
 * @since 2018-12-19
 */
@TableName("cm_stuupload")
public class CmStuupload extends Model<CmStuupload> {

    private static final long serialVersionUID = 1L;

    private Integer id;
    @TableField("homework_id")
    private Integer homeworkId;
    /**
     * 作业对应的学生id
     */
    @TableField("stu_id")
    private String stuId;
    @TableField("file_name")
    private String fileName;
    @TableField("file_path")
    private String filePath;
    @TableField("submit_time")
    private Date submitTime;
    /**
     * 批改这个作业的助教id
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
        return null;
    }

    @Override
    public String toString() {
        return "CmStuupload{" +
        "id=" + id +
        ", homeworkId=" + homeworkId +
        ", stuId=" + stuId +
        ", fileName=" + fileName +
        ", filePath=" + filePath +
        ", submitTime=" + submitTime +
        ", assId=" + assId +
        "}";
    }
}
