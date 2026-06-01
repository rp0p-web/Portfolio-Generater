package loginapp.demo;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SkillRepo
        extends JpaRepository
        <SkillEntity,Integer>{

    List<SkillEntity>
    findByPortfolioId(int portfolioId);
}