package com.Recipe.RecipeApp.service;

import com.Recipe.RecipeApp.entity.User;

import java.util.Optional;

public interface UserService {
    Optional<User> getUserByEmail(String email);
}
