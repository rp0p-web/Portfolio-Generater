package loginapp.demo;

import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepo
        extends JpaRepository<AdminEntity,Integer>{

    AdminEntity findByUsernameAndPassword(
            String username,
            String password
    );
}
