package loginapp.demo;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EducationRepo
        extends JpaRepository
        <EducationEntity,Integer>{

    List<EducationEntity>
    findByPortfolioId(int portfolioId);
}