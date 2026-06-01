
package loginapp.demo;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PortfolioRepo
        extends JpaRepository
        <PortfolioEntity,Integer> {

    List<PortfolioEntity>
    findByUserId(int userId);
}