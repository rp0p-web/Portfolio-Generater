package loginapp.demo;

import jakarta.persistence.*;

@Entity
@Table(name="resumes")

public class ResumeEntity {

    @Id
    @GeneratedValue(strategy =
            GenerationType.IDENTITY)

    private int id;

    private int portfolioId;

    private String resumeFile;


    public ResumeEntity(){}


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }


    public int getPortfolioId() {
        return portfolioId;
    }

    public void setPortfolioId(
            int portfolioId
    ) {
        this.portfolioId =
                portfolioId;
    }


    public String getResumeFile() {
        return resumeFile;
    }

    public void setResumeFile(
            String resumeFile
    ) {
        this.resumeFile =
                resumeFile;
    }
}