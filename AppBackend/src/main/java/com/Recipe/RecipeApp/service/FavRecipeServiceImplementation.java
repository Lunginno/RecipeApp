package com.Recipe.RecipeApp.service;

import com.Recipe.RecipeApp.entity.FavRecipe;
import com.Recipe.RecipeApp.entity.User;
import com.Recipe.RecipeApp.repository.FavRecipeRepository;
import com.Recipe.RecipeApp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FavRecipeServiceImplementation implements FavRecipeService{

    @Autowired
    private FavRecipeRepository recipeRepo;

    @Autowired
    private UserRepository userRepo;

    @Override
    public List<FavRecipe> getFavourites(){
        return recipeRepo.findAll();
    }

    @Override
    public void saveRecipe(FavRecipe favRecipe, Integer userId){

        User user = userRepo.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("Invalid user ID"));
        recipeRepo.save(favRecipe);
    }


    @Override
    public FavRecipe getRecipeById(Long id){
        Optional<FavRecipe> optional = recipeRepo.findById(id);

        FavRecipe favRecipe;

        if(optional.isPresent()){
            favRecipe = optional.get();
        } else {
            throw new RuntimeException("The id is not found");
        }

        return favRecipe;
    }

    @Override
    public List<FavRecipe> getRecipeByUserId(Integer userId) {
        return recipeRepo.findByUserId(userId);
    }

    @Override //
    public List<FavRecipe> getRecipeById(Integer userId){
        return recipeRepo.findByUserId(userId);
    }

    @Override
    public void deleteRecipeById(Long id) {
        this.recipeRepo.deleteById(id);
    }

    @Override
    public void deleteRecipe(Long id){
        this.recipeRepo.deleteById(id);
    }
}
