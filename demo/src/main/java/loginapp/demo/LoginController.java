package loginapp.demo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController

@CrossOrigin(origins = "http://localhost:5173")
public class LoginController {

        @Autowired
        LoginService service;


    @PostMapping("/register")

    public Map<String,String> register(
            @RequestBody LoginEntity user
    ){

        String message =
                service.register(user);

        Map<String,String> response =
                new HashMap<>();

        response.put("message",message);

        return response;
    }

    @PostMapping("/login")

    public Map<String,Object> login(
            @RequestBody LoginEntity user
    ){

        LoginEntity validUser =
                service.login(
                        user.getUsername(),
                        user.getPassword()
                );

        Map<String,Object> response =
                new HashMap<>();


        if(validUser != null){

            response.put("success",true);

            response.put(
                    "username",
                    validUser.getUsername()
            );

            response.put(
                    "id",
                    validUser.getId()
            );

        }else{

            response.put("success",false);
        }

        return response;
    }
    @GetMapping("/users")

    public List<LoginEntity> getUsers(){

        return service.getAllUsers();
    }
    @DeleteMapping("/delete/{id}")

    public void deleteUser(
            @PathVariable int id
    ){

        service.deleteUser(id);
    }
    @PostMapping("/adminlogin")

    public Map<String,Object> adminLogin(
            @RequestBody AdminEntity admin
    ){

        AdminEntity validAdmin =
                service.adminLogin(
                        admin.getUsername(),
                        admin.getPassword()
                );

        Map<String,Object> response =
                new HashMap<>();


        if(validAdmin != null){

            response.put("success",true);

        }else{

            response.put("success",false);
        }

        return response;
    }
    @Autowired
    PortfolioRepo portfolioRepo;
    @PostMapping("/createPortfolio")

    public PortfolioEntity createPortfolio(
            @RequestBody PortfolioEntity portfolio
    ){

        return service.createPortfolio(
                portfolio
        );
    }
    @GetMapping("/portfolios/{userId}")

    public List<PortfolioEntity>
    getUserPortfolios(
            @PathVariable int userId
    ){

        return service.getUserPortfolios(
                userId
        );
    }
    @PostMapping("/savePersonal")

    public PersonalDetailsEntity
    savePersonalDetails(
            @RequestBody
            PersonalDetailsEntity details
    ){

        return service
                .savePersonalDetails(details);
    }
    @GetMapping(
            "/personal/{portfolioId}"
    )

    public PersonalDetailsEntity
    getPersonalDetails(
            @PathVariable int portfolioId
    ){

        return service
                .getPersonalDetails(
                        portfolioId
                );
    }
    @PostMapping("/saveEducation")

    public EducationEntity
    saveEducation(
            @RequestBody
            EducationEntity education
    ){

        return service
                .saveEducation(
                        education
                );
    }
    @GetMapping(
            "/education/{portfolioId}"
    )

    public List<EducationEntity>
    getEducation(
            @PathVariable int portfolioId
    ){

        return service
                .getEducation(
                        portfolioId
                );
    }
    @PostMapping("/saveSkill")

    public SkillEntity
    saveSkill(
            @RequestBody
            SkillEntity skill
    ){

        return service
                .saveSkill(skill);
    }
    @GetMapping("/skills/{portfolioId}")

    public List<SkillEntity>
    getSkills(
            @PathVariable int portfolioId
    ){

        return service
                .getSkills(portfolioId);
    }
    @PostMapping("/saveProject")

    public ProjectEntity
    saveProject(
            @RequestBody
            ProjectEntity project
    ){

        return service
                .saveProject(project);
    }
    @GetMapping("/projects/{portfolioId}")

    public List<ProjectEntity>
    getProjects(
            @PathVariable int portfolioId
    ){

        return service
                .getProjects(portfolioId);
    }
    @PostMapping("/saveCertificate")

    public CertificateEntity
    saveCertificate(
            @RequestBody
            CertificateEntity certificate
    ){

        return service.saveCertificate(
                        certificate
                );
    }
    @PostMapping("/saveResume")

    public ResumeEntity
    saveResume(
            @RequestBody
            ResumeEntity resume
    ){

        return service
                .saveResume(resume);
    }
    @GetMapping("/certificates/{portfolioId}")

    public List<CertificateEntity>
    getCertificates(
            @PathVariable int portfolioId
    ){

        return service
                .getCertificates(
                        portfolioId
                );
    }
    @GetMapping("/resume/{portfolioId}")

    public ResumeEntity
    getResume(
            @PathVariable int portfolioId
    ){

        return service
                .getResume(
                        portfolioId
                );
    }
    }

