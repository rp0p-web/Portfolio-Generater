package loginapp.demo;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CertificateRepo
        extends JpaRepository
        <CertificateEntity,Integer>{

    List<CertificateEntity>
    findByPortfolioId(
            int portfolioId
    );
}