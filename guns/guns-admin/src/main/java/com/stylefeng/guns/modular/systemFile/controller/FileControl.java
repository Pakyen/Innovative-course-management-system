package com.stylefeng.guns.modular.systemFile.controller;


//import com.mysql.*;
//import com.mysql.jdbc.Connection;
//import com.mysql.jdbc.Statement;
//import com.mysql.jdbc.PreparedStatement;
import java.sql.*;

//import javax.servlet.http.HttpServlet;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//
//import java.util.*;


public class FileControl {
	
    public static void File_in(int classId,String fileName,String filePath) {
        try {
            Class.forName("com.mysql.jdbc.Driver");
            System.out.println("成功加载sql驱动");
        } catch (ClassNotFoundException e) {
            // TODO Auto-generated catch block
            System.out.println("找不到sql驱动");
            e.printStackTrace();
        }
        String url="jdbc:mysql://localhost:3306/guns";
        Connection conn;
        PreparedStatement pastmt;
        
        try {
            conn = (Connection) DriverManager.getConnection(url,"root","151819");
            //创建一个Statement对象
            Statement stmt = (Statement) conn.createStatement(); //创建Statement对象
            System.out.print("成功连接到数据库！");
            /********
            ResultSet rs = stmt.executeQuery("select * from cm_teacherfile ;");
            //user 为你表的名称
            System.out.println(rs.toString());
          
            while (rs.next()) {
                System.out.println(rs.getString("id"));
                System.out.println(rs.getString("class_id"));
            }
            **********/
            int i=0;
            
 			String sql_insert="insert into cm_teacherfile(class_id,file_name,file_path) values(?,?,?);";
            pastmt =(PreparedStatement) conn.prepareStatement(sql_insert);
            pastmt.setInt(1, classId);
            pastmt.setString(2, fileName);
            pastmt.setString(3, filePath);
            i=pastmt.executeUpdate();
            
            
            pastmt.close();
            
            
            stmt.close();
            conn.close();
        } catch (SQLException e){
            System.out.println("fail to connect the database!");
            e.printStackTrace();
        }
    }
    
}
