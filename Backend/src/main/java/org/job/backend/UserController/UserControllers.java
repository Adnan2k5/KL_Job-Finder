package org.job.backend.UserController;


import org.job.backend.Model.User;
import org.job.backend.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserControllers {
    @Autowired
    private UserRepo userRepo;
        public User registerUser(User user){
            User extuser = userRepo.findByEmail(user.getEmail());
            if(extuser != null){
                return null;
            }
            return userRepo.save(user);
    }
    public User getUser(User user){
        User user2 = userRepo.findByEmail(user.getEmail());
        if(user2 == null){
            return null;
        }
        return user2;
    }
}

