package loginapp.demo;

import jakarta.persistence.*;

@Entity
@Table(name="certificates")

public class CertificateEntity {

    @Id
    @GeneratedValue(strategy =
            GenerationType.IDENTITY)

    private int id;

    private int portfolioId;

    private String certificateName;

    private String organization;

    private String issueDate;

    private String certificateImage;


    public CertificateEntity(){}


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


    public String getCertificateName() {
        return certificateName;
    }

    public void setCertificateName(
            String certificateName
    ) {
        this.certificateName =
                certificateName;
    }


    public String getOrganization() {
        return organization;
    }

    public void setOrganization(
            String organization
    ) {
        this.organization =
                organization;
    }


    public String getIssueDate() {
        return issueDate;
    }

    public void setIssueDate(
            String issueDate
    ) {
        this.issueDate =
                issueDate;
    }


    public String getCertificateImage() {
        return certificateImage;
    }

    public void setCertificateImage(
            String certificateImage
    ) {
        this.certificateImage =
                certificateImage;
    }
}