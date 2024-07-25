import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private Url = 'www.themealdb.com/api/json/v1/1/categories.php'

  constructor(private http: HttpClient) { }

  getCategories(){
    this.http.get(`${this.Url}`)
  }
}
