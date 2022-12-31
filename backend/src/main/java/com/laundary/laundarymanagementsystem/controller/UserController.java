package com.laundary.laundarymanagementsystem.controller;

import com.laundary.laundarymanagementsystem.entities.User;
import com.laundary.laundarymanagementsystem.repository.UserRepository;
import com.laundary.laundarymanagementsystem.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {
@Autowired
    private UserService userService;
@Autowired
private UserRepository userRepository;

    public UserController(UserService userService){
    this.userService = userService;
    }

    @GetMapping("/")
    public List<User> getAllUsers()
    {
        return userService.getUsers();
    }

    @GetMapping("/{userId}")
    public User getUser(@PathVariable (value = "userId") Integer userId)
    {
        return userService.getUserById(userId);
    }

    @PostMapping("/addUser")
    public User addUser(@RequestBody User user) {
        return userService.add(user);
    }

    @DeleteMapping("/{userId}")
    public String deleteUser(@PathVariable (value = "userId") Integer userId)
    {
        userService.delete(userId);
        return "SUCCESS";
    }
    @PostMapping("/login")
    public User loginAuth(@RequestParam String email,
                           @RequestParam String password)
    {
        String s = userService.check(email,password);
        if(s.equals("SUCCESS"))
        {
            return userRepository.getUserByEmailAndPassword(email, password);
        } else
        {
            return new User();
        }
    }

}



