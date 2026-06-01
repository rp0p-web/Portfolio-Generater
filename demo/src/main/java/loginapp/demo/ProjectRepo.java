package loginapp.demo;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProjectRepo
        extends JpaRepository
        <ProjectEntity,Integer>{

    List<ProjectEntity>
    findByPortfolioId(int portfolioId);
}