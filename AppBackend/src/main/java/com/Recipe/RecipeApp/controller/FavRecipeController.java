package com.Recipe.RecipeApp.controller;

import com.Recipe.RecipeApp.auth.AuthenticationService;
import com.Recipe.RecipeApp.entity.FavRecipe;
import com.Recipe.RecipeApp.entity.User;
import com.Recipe.RecipeApp.repository.FavRecipeRepository;
import com.Recipe.RecipeApp.repository.UserRepository;
import com.Recipe.RecipeApp.service.FavRecipeServiceImplementation;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/auth/favourite")
public class FavRecipeController {
    @Autowired
    private FavRecipeServiceImplementation favServiceImplement;

    @Autowired
    private UserRepository userRepo;

    @Autowired
    private FavRecipeRepository watchlistRepo;

    @Autowired
    private AuthenticationService userService;


    @GetMapping
    public List<FavRecipe> findAll(){
        return favServiceImplement.getFavourites();
    }

    @PostMapping
    public void saveRecipe(@RequestBody FavRecipe favRecipe, @RequestParam Integer userId){

        // Fetch the user object based on the user ID
        User user = userRepo.findById(userId)
                .orElseThrow(() -> new EntityNotFoundException("User not found"));


        favServiceImplement.saveRecipe(favRecipe, userId);
    }

    @GetMapping("/user/{userId}")
    public List<FavRecipe> getMoviesByUserId(@PathVariable Integer userId) {
        return favServiceImplement.getRecipeByUserId(userId);
    }



    @GetMapping("/{id}")
    public FavRecipe findOneById(@PathVariable Long id){
        return favServiceImplement.getRecipeById(id);
    }


    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id){
        this.watchlistRepo.deleteById(id);
    }




}
