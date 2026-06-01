package loginapp.demo;

import jakarta.persistence.*;

@Entity
@Table(name="education")

public class EducationEntity {

    @Id
    @GeneratedValue(strategy =
            GenerationType.IDENTITY)

    private int id;

    private int portfolioId;

    private String collegeName;

    private String degree;

    private String department;

    private String cgpa;

    private String startYear;

    private String endYear;


    public EducationEntity(){}


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


    public String getCollegeName() {
        return collegeName;
    }

    public void setCollegeName(
            String collegeName
    ) {
        this.collegeName =
                collegeName;
    }


    public String getDegree() {
        return degree;
    }

    public void setDegree(
            String degree
    ) {
        this.degree = degree;
    }


    public String getDepartment() {
        return department;
    }

    public void setDepartment(
            String department
    ) {
        this.department =
                department;
    }


    public String getCgpa() {
        return cgpa;
    }

    public void setCgpa(
            String cgpa
    ) {
        this.cgpa = cgpa;
    }


    public String getStartYear() {
        return startYear;
    }

    public void setStartYear(
            String startYear
    ) {
        this.startYear =
                startYear;
    }


    public String getEndYear() {
        return endYear;
    }

    public void setEndYear(
            String endYear
    ) {
        this.endYear = endYear;
    }
}
