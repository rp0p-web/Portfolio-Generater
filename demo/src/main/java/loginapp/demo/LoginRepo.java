package loginapp.demo;

import loginapp.demo.LoginEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LoginRepo
        extends JpaRepository<LoginEntity,Integer> {

    LoginEntity findByUsernameAndPassword(
            String username,
            String password
    );
    LoginEntity findByUsername(String username);

}