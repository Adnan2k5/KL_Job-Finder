package org.job.backend;

import org.job.backend.Model.User;
import org.job.backend.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;



@RestController
public class UserControllers {
    @Autowired
    private UserRepo userRepo;

    @GetMapping("/user")
    public String getMethodName(@RequestParam String param) {
        return "Working";
    }
    
}
