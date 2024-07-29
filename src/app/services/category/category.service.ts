import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';
  private mealByIdUrl = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';

  constructor(private http: HttpClient) { }

  getMealsByCategory(category: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}${category}`);
  }
  getMealById(id: string): Observable<any> {
    return this.http.get<any>(`${this.mealByIdUrl}${id}`);
  }
  
}
