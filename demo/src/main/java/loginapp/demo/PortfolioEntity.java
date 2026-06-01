package loginapp.demo;

import jakarta.persistence.*;

import java.sql.Timestamp;

@Entity
@Table(name = "portfolios")

public class PortfolioEntity {

    @Id
    @GeneratedValue(strategy =
            GenerationType.IDENTITY)

    private int id;

    private int userId;

    private String portfolioName;

    private String templateName;

    private Timestamp createdAt;


    public PortfolioEntity(){}


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }


    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }


    public String getPortfolioName() {
        return portfolioName;
    }

    public void setPortfolioName(
            String portfolioName
    ) {
        this.portfolioName =
                portfolioName;
    }


    public String getTemplateName() {
        return templateName;
    }

    public void setTemplateName(
            String templateName
    ) {
        this.templateName =
                templateName;
    }


    public Timestamp getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(
            Timestamp createdAt
    ) {
        this.createdAt =
                createdAt;
    }
}