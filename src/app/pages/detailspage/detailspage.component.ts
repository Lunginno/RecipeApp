import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category/category.service';
@Component({
  selector: 'app-detailspage',
  templateUrl: './detailspage.component.html',
  styleUrls: ['./detailspage.component.scss']
})
export class DetailsComponent implements OnInit {

  meal: any;
  category!: string;

  constructor(
    private route: ActivatedRoute,
    private categorysevice: CategoryService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.loadMealDetails(id);
    });
  }

  loadMealDetails(id: string): void {
    this.categorysevice.getMealById(id).subscribe(data => {
      this.meal = data.meals[0];
    });
  }
  
  getIngredients(): string[] {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = this.meal[`strIngredient${i}`];
      const measure = this.meal[`strMeasure${i}`];
      if (ingredient) {
        ingredients.push(`${measure ? measure + ' ' : ''}${ingredient}`);
      }
    }
    return ingredients;
  }
  fetchMeals(): void {
    if (this.category) {
      this.categorysevice.getMealsByCategory(this.category).subscribe(data => {
        this.meal = data.meals;
      });
    }
  }
  goBack() {
    window.history.back();
  }
  
}

