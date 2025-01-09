package org.job.backend;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
import org.job.backend.Model.User;
import org.job.backend.UserController.UserControllers;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@SpringBootApplication
@CrossOrigin(origins = "http://localhost:5173")
@ComponentScan(basePackages = {"org.job.backend"})
@RestController
public class BackendApplication {
    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
    }
    @Autowired
    private UserControllers userControllers;
    

    @PostMapping(value = "/api/register")
    public User registerUser(@RequestBody User user){
        return userControllers.registerUser(user);
    } 
    
    @PostMapping("/api/login")
    public User postMethodName(@RequestBody User user) {
        return userControllers.loginUser(user);
    }
    
}
