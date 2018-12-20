package com.stylefeng.guns.modular.stuupload.service;

import com.stylefeng.guns.modular.system.model.CmStuupload;
import com.baomidou.mybatisplus.service.IService;

import java.io.InputStream;

/**
 * <p>
 * VIEW 服务类
 * </p>
 *
 * @author qqzj
 * @since 2018-12-19
 */
public interface ICmStuuploadService extends IService<CmStuupload> {
    public void uploadApk(InputStream input, String fileName);
}
