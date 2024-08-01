package com.Recipe.RecipeApp.repository;

import com.Recipe.RecipeApp.entity.FavRecipe;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FavRecipeRepository extends JpaRepository<FavRecipe, Long> {
    List<FavRecipe> findByUserId (Integer userId);
}
