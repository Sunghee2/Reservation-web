import org.junit.Test;


import java.sql.Connection;
import java.sql.DriverManager;

public class MySQLConnectionTest {

        private static final String DRIVER = "com.mysql.cj.jdbc.Driver";
        private static final String URL = "jdbc:mysql://127.0.0.1:3306/gonggang?useSSL=false&serverTimezone=UTC&useLegacyDatetimeCode=false";
        private static final String USER = "root";
        private static final String PW = "BSH123";

        @Test
        public void testConnection() throws Exception{
                Class.forName(DRIVER);

                try(Connection conn = DriverManager.getConnection(URL, USER, PW)){
                        System.out.println(conn);
                } catch (Exception e) {
                        e.printStackTrace();
                }
        }


}

