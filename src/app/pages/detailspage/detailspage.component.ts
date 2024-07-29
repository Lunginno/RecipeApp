import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category/category.service';
@Component({
  selector: 'app-detailspage',
  templateUrl: './detailspage.component.html',
  styleUrls: ['./detailspage.component.scss']
})
export class DetailsComponent implements OnInit {
  meal: any;

  constructor(
    private route: ActivatedRoute,
    private categorysevice: CategoryService
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
  transformInstructions(instructions: string): string {
    if (!instructions) return '';
    return instructions.replace(/\. /g, '.<br>');
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
}

