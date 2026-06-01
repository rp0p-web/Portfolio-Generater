package loginapp.demo;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ResumeRepo
        extends JpaRepository
        <ResumeEntity,Integer>{
    ResumeEntity
    findByPortfolioId(
            int portfolioId
    );
}