package loginapp.demo;

import jakarta.persistence.*;

@Entity
@Table(name="projects")

public class ProjectEntity {

    @Id
    @GeneratedValue(strategy =
            GenerationType.IDENTITY)

    private int id;

    private int portfolioId;

    private String projectName;

    @Column(columnDefinition="TEXT")
    private String description;

    private String githubLink;

    private String demoLink;

    private String projectImage;


    public ProjectEntity(){}


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


    public String getProjectName() {
        return projectName;
    }

    public void setProjectName(
            String projectName
    ) {
        this.projectName =
                projectName;
    }


    public String getDescription() {
        return description;
    }

    public void setDescription(
            String description
    ) {
        this.description =
                description;
    }


    public String getGithubLink() {
        return githubLink;
    }

    public void setGithubLink(
            String githubLink
    ) {
        this.githubLink =
                githubLink;
    }


    public String getDemoLink() {
        return demoLink;
    }

    public void setDemoLink(
            String demoLink
    ) {
        this.demoLink =
                demoLink;
    }


    public String getProjectImage() {
        return projectImage;
    }

    public void setProjectImage(
            String projectImage
    ) {
        this.projectImage =
                projectImage;
    }
}