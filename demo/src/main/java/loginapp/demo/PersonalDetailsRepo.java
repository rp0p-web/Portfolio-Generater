package loginapp.demo;


import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonalDetailsRepo
        extends JpaRepository
        <PersonalDetailsEntity,Integer>{

    PersonalDetailsEntity
    findByPortfolioId(int portfolioId);
}
