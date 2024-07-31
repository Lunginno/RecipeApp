import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category/category.service';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit{

  category!: string;
  meals: any[] = [];

  constructor(
    private categoryservice: CategoryService,
    private route: ActivatedRoute,
    private router: Router
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
}
