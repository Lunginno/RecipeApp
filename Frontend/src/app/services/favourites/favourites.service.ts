import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Observable, catchError, throwError } from 'rxjs';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FavouritesService {

  private apiUrl = "http://localhost:8080/api/v1/auth/favourite";
  favRecipes: any[] = [];
  userId: number | null = null;

  constructor(private http: HttpClient, private auth: AuthService) { 
    this.auth.getAuthStatusListener().subscribe (isAuthenticated =>{
      this.userId = this.auth.getUserId();
    });

    this.getFavourite().subscribe(recipe => {
      this.favRecipes = recipe;
      console.log(recipe)
    });
  }
  getFavourite(): Observable<any[]> {
    const userId = this.userId;
    console.log(userId)

    if(!userId){
      console.error('User Id is missing');
      return of([]);
    }
    console.log(userId);
    
    return this.http.get<any[]>(`${this.apiUrl}/user/${userId}`).pipe(
      catchError((error: HttpClient) => {
        return throwError(error);
      })
    );
  }

  addToFavourites(favRecipe: any): void{
    const userId = this.userId;

    if(!userId){
      console.error('User ID is missing.');

      return;
    }
    const {idMeal, strMeal, strMealThumb, strCategory, strArea } = favRecipe;

  const payload = {
    id: idMeal,
    recipe_name: strMeal,
    image: strMealThumb,
    category: strCategory,
    origin: strArea,
    user: {
      id: userId
    }
  };

  this.http.post(`${this.apiUrl}?userId=${userId}`, payload)
  .subscribe(
    response => {
      console.log('Recipe added Successfully:', response);
    },
    
    error => {
      console.error('Error adding recipe', error);
    }
  );
  }

  removeFromWatchlist(recipe : any): Observable<any>{
    const index = this.favRecipes.findIndex(fav => fav.id === recipe.id);
    if (index !== -1){
      this.favRecipes.splice(index, 1);
      return this.http.delete(`${this.apiUrl}/${recipe.id}`).pipe(
        catchError(error => {
          console.error('Error removing movie from Favourites:', error);
          return of(null);
        })
      );
  } else {
    console.log('Movie not found in Favourites');
    return of(null);
    }
  }

  getFavourites(): any[]{
    return this.favRecipes;
  }

  isInWatchlist(recipe: any): boolean{
    return this.favRecipes.some(fav => fav.id === recipe.id );
  }


}
