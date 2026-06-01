package loginapp.demo;

import jakarta.persistence.*;

@Entity
@Table(name="skills")

public class SkillEntity {

    @Id
    @GeneratedValue(strategy =
            GenerationType.IDENTITY)

    private int id;

    private int portfolioId;

    private String skillName;

    private String skillLevel;

    private String category;


    public SkillEntity(){}


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


    public String getSkillName() {
        return skillName;
    }

    public void setSkillName(
            String skillName
    ) {
        this.skillName =
                skillName;
    }


    public String getSkillLevel() {
        return skillLevel;
    }

    public void setSkillLevel(
            String skillLevel
    ) {
        this.skillLevel =
                skillLevel;
    }


    public String getCategory() {
        return category;
    }

    public void setCategory(
            String category
    ) {
        this.category = category;
    }
}