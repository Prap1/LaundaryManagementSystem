package com.laundary.laundarymanagementsystem.service;

import com.laundary.laundarymanagementsystem.entities.User;
import com.laundary.laundarymanagementsystem.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }


    public List<User> getUsers() {
        return userRepository.findAll();
    }


    public User getUserById(Integer id) {

        return userRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("there's no such server"));
    }


    public User add(User user) {

        return userRepository.save(user);
    }


    public void delete(Integer id) {

        userRepository.deleteById(id);
    }
    public String check(String email, String password) {

        User user = userRepository.getUserByEmailAndPassword(email, password);
        if (user == null) {
            return "User Not Found";
        } else {
            return "SUCCESS";
        }



    }
    }
