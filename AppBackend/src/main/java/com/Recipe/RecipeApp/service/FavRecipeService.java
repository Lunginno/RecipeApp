package com.Recipe.RecipeApp.service;

import com.Recipe.RecipeApp.entity.FavRecipe;

import java.util.List;

public interface FavRecipeService {
    List<FavRecipe> getFavourites();
    public void saveRecipe (FavRecipe favRecipe, Integer userId);
    FavRecipe getRecipeById(Long id); //getting the recipe item by ID
    List<FavRecipe> getRecipeByUserId(Integer userId);



    void deleteRecipeById(Long id);

    void deleteRecipe(Long id);

    List<FavRecipe> getRecipeById(Integer id); //posting the recipe item by id user_id
}
