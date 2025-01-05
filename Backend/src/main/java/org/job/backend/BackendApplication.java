package org.job.backend;

import org.job.backend.Model.User;
import org.job.backend.Repository.UserRepo;
import org.springframework.boot.SpringApplication;
import java.util.List;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.beans.factory.annotation.Autowired;


@SpringBootApplication(scanBasePackages = "org.job.backend")
@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class BackendApplication {
    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
    }
    @GetMapping("/hello")
    public String hello(@RequestParam(value = "name", defaultValue = "World") String name) {
        return String.format("Hello %s!", name);
    }
    @Autowired
    private UserRepo userRepo;

    @PostMapping(value = "/api/user")
    public User postMethodName(@RequestBody User user) {
        userRepo.save(user);
        return user;
    }

    @GetMapping(value = "/api/user")
    public List<User> getAllUsers() {
        return userRepo.findAll();
    }

}
