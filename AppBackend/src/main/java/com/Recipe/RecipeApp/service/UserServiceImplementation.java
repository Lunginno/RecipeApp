package com.Recipe.RecipeApp.service;


import com.Recipe.RecipeApp.entity.User;
import com.Recipe.RecipeApp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImplementation implements UserService {

    private final UserRepository userRepo;

    @Autowired
    public UserServiceImplementation(UserRepository userRepo) {
        this.userRepo = userRepo;
    }

    @Override
    public Optional<User> getUserByEmail(String email) {
        return userRepo.findByEmail(email);
    }
}
