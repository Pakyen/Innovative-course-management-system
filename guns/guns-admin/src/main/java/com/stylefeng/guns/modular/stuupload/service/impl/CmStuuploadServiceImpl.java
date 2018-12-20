package com.stylefeng.guns.modular.stuupload.service.impl;

import com.stylefeng.guns.modular.system.model.CmStuupload;
import com.stylefeng.guns.modular.system.dao.CmStuuploadMapper;
import com.stylefeng.guns.modular.stuupload.service.ICmStuuploadService;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;

/**
 * <p>
 * VIEW 服务实现类
 * </p>
 *
 * @author qqzj
 * @since 2018-12-19
 */
@Service
public class CmStuuploadServiceImpl extends ServiceImpl<CmStuuploadMapper, CmStuupload> implements ICmStuuploadService {
    @Override
    public void uploadApk(InputStream input, String fileName) {
        OutputStream output = null;
        try{
            output = new FileOutputStream("/home/"+fileName);
            byte datas[] = new byte[1024*8];
            int len = 0;
            while((len = input.read(datas))!=-1){
                output.write(datas,0,len);
            }
        }
        catch (Exception e){
            e.printStackTrace();
        }finally {
            try{
                if(null!=input){
                    input.close();
                }
                if(null!=output){
                    output.close();
                }
            }
            catch (Exception e){
                e.printStackTrace();
            }
        }
    }
}
