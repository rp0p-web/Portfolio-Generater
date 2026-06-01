package loginapp.demo;

import org.springframework.web.bind.annotation.*;

import org.springframework.web.multipart.MultipartFile;

import java.io.File;

@RestController

@CrossOrigin(origins =
        "http://localhost:5173")

public class FileUploadController {

    @PostMapping("/upload")

    public String uploadFile(
            @RequestParam("file")
            MultipartFile file
    ){

        try{

            String fileName =
                    file.getOriginalFilename();

            String uploadPath =
                    "uploads/" + fileName;

            file.transferTo(
                    new File(uploadPath)
            );

            return uploadPath;

        }catch(Exception e){

            e.printStackTrace();

            return "Upload Failed";
        }
    }
}