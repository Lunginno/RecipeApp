import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollService } from 'src/app/services/scroll.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  loggedIn: boolean = false;
  constructor(private router: Router, private scrollService: ScrollService, private auth: AuthService) { }

  ngOnInit() {
    this.loggedIn = this.auth.getIsLoggedIn();
    
    // console.log(this.loggedIn)
  }

  scrollTo(sectionId: string) {
    this.scrollService.scrollToSection(sectionId);
  }
  onHome()
  {
    this.router.navigate(['/home']);
  }
  onProfile(){
    if(this.loggedIn){
      this.router.navigate(['/profile']);
    }else{
      this.router.navigate(['/login']);
    }
  }
}
