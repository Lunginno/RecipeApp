package com.Recipe.RecipeApp.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.transaction.Transactional;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Transactional
@Getter
@Setter
@Entity
@Table(name = "favourites")
public class FavRecipe {

    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    @Id
    private Long id;

    @Column(name = "recipe_name")
    private String name;

    private String image;

    private String category;

    private String origin;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;



}