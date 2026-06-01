package loginapp.demo;


import jakarta.persistence.*;

@Entity
@Table(name="personal_details")

public class PersonalDetailsEntity {

    @Id
    @GeneratedValue(strategy =
            GenerationType.IDENTITY)

    private int id;

    private int portfolioId;

    private String fullName;

    private String email;

    private String phone;

    private String address;

    private String linkedin;

    private String github;

    @Column(columnDefinition="TEXT")
    private String bio;

    private String profileImage;


    public PersonalDetailsEntity(){}


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


    public String getFullName() {
        return fullName;
    }

    public void setFullName(
            String fullName
    ) {
        this.fullName =
                fullName;
    }


    public String getEmail() {
        return email;
    }

    public void setEmail(
            String email
    ) {
        this.email = email;
    }


    public String getPhone() {
        return phone;
    }

    public void setPhone(
            String phone
    ) {
        this.phone = phone;
    }


    public String getAddress() {
        return address;
    }

    public void setAddress(
            String address
    ) {
        this.address = address;
    }


    public String getLinkedin() {
        return linkedin;
    }

    public void setLinkedin(
            String linkedin
    ) {
        this.linkedin = linkedin;
    }


    public String getGithub() {
        return github;
    }

    public void setGithub(
            String github
    ) {
        this.github = github;
    }


    public String getBio() {
        return bio;
    }

    public void setBio(
            String bio
    ) {
        this.bio = bio;
    }


    public String getProfileImage() {
        return profileImage;
    }

    public void setProfileImage(
            String profileImage
    ) {
        this.profileImage =
                profileImage;
    }
}
