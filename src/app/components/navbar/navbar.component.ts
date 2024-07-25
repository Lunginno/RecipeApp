import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private router: Router, private scrollService: ScrollService) { }

  ngOnInit(): void {
  }

  scrollTo(sectionId: string) {
    this.scrollService.scrollToSection(sectionId);
  }
  onHome()
  {
    this.router.navigate(['/home']);
  }
}
