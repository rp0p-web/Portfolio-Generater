package loginapp.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LoginService {

        @Autowired
        LoginRepo loginRepo ;

    public String register(LoginEntity user){

        // CHECK ADMIN NAME
        if(
                user.getUsername()
                        .equalsIgnoreCase("admin")
        ){

            return "Username already taken";
        }


        // CHECK EXISTING USER
        LoginEntity existingUser =
                loginRepo.findByUsername(
                        user.getUsername()
                );


        if(existingUser != null){

            return "Username already taken";
        }


        loginRepo.save(user);

        return "Registration Successful";
    }
        public LoginEntity login(String username,
                          String password) {

            return loginRepo.findByUsernameAndPassword(
                    username,
                    password
            );
        }
    public List<LoginEntity> getAllUsers(){

        return loginRepo.findAll();
    }
    public void deleteUser(int id){

        loginRepo.deleteById(id);
    }
    @Autowired
    AdminRepo adminRepo;
    public AdminEntity adminLogin(
            String username,
            String password
    ){

        return adminRepo.findByUsernameAndPassword(
                username,
                password
        );
    }
    @Autowired
    PortfolioRepo portfolioRepo;
    public PortfolioEntity createPortfolio(
            PortfolioEntity portfolio
    ){

        return portfolioRepo.save(portfolio);
    }
    public List<PortfolioEntity>
    getUserPortfolios(int userId){

        return portfolioRepo.findByUserId(
                userId
        );
    }
    @Autowired
    PersonalDetailsRepo personalRepo;
    public PersonalDetailsEntity
    savePersonalDetails(
            PersonalDetailsEntity details
    ){

        return personalRepo.save(details);
    }
    public PersonalDetailsEntity
    getPersonalDetails(
            int portfolioId
    ){

        return personalRepo
                .findByPortfolioId(
                        portfolioId
                );
    }
    @Autowired
    EducationRepo educationRepo;
    public EducationEntity
    saveEducation(
            EducationEntity education
    ){

        return educationRepo.save(
                education
        );
    }
    public List<EducationEntity>
    getEducation(
            int portfolioId
    ){

        return educationRepo
                .findByPortfolioId(
                        portfolioId
                );
    }
    @Autowired
    SkillRepo skillRepo;
    public SkillEntity
    saveSkill(
            SkillEntity skill
    ){

        return skillRepo.save(skill);
    }
    public List<SkillEntity>
    getSkills(
            int portfolioId
    ){

        return skillRepo
                .findByPortfolioId(
                        portfolioId
                );
    }
    @Autowired
    ProjectRepo projectRepo;
    public ProjectEntity
    saveProject(
            ProjectEntity project
    ){

        return projectRepo.save(
                project
        );
    }
    public List<ProjectEntity>
    getProjects(
            int portfolioId
    ){

        return projectRepo
                .findByPortfolioId(
                        portfolioId
                );
    }
    @Autowired
    CertificateRepo certificateRepo;
    public CertificateEntity
    saveCertificate(
            CertificateEntity certificate
    ){

        return certificateRepo
                .save(certificate);
    }
    @Autowired
    ResumeRepo resumeRepo;
    public ResumeEntity
    saveResume(
            ResumeEntity resume
    ){

        return resumeRepo
                .save(resume);
    }
    public List<CertificateEntity>
    getCertificates(
            int portfolioId
    ){

        return certificateRepo
                .findByPortfolioId(
                        portfolioId
                );
    }
    public ResumeEntity
    getResume(
            int portfolioId
    ){

        return resumeRepo
                .findByPortfolioId(
                        portfolioId
                );
    }
    }

