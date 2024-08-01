import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category/category.service';
import { FavouritesService } from 'src/app/services/favourites/favourites.service';
import { AuthService } from 'src/app/services/auth/auth.service';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit{


  category!: string;
  meals: any[] = [];
  favRecipe: { addedToFavourites: boolean } = { addedToFavourites: false };

  constructor(
    private categoryservice: CategoryService,
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthService,
    private favorite: FavouritesService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.category = params.get('category') || '';
      this.fetchMeals();
    });
  }

  fetchMeals(): void {
    if (this.category) {
      this.categoryservice.getMealsByCategory(this.category).subscribe(data => {
        this.meals = data.meals;
      });
    }
  }
  goToDetails(id: string): void {
    this.router.navigate(['/details', id]);
  }
  navigateToHome() 
  {
    this.router.navigate(['/home']);
  } 
  addToFavorites(favRecipe: any){  
    if(this.auth.getIsLoggedIn()){
      this.favorite.addToFavourites(favRecipe);
      favRecipe.addedToFavourites = !favRecipe.addedToFavourites;
      console.log('Recipe added' + this.favorite.getFavourite());
    }
    else{
      alert("User account not found, directing you to sign in...")
      this.router.navigate(['login']);
    }

    favRecipe.addedToFavourites = !favRecipe.addedToFavourites;
    console.log('Recipe added' + this.favorite.getFavourite());
  }
}
