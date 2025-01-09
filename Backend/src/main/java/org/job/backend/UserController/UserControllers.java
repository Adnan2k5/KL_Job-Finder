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

    
    public User loginUser(User user){
        User extuser = userRepo.findByEmail(user.getEmail());
        if(extuser == null){
            return null;
        }
        if(extuser.getPassword().equals(user.getPassword())){
            User user1 = new User(extuser.getName(), extuser.getName(), extuser.getUserId());
            return user1;
        }
        else{
            return null;
        }
    }
}

