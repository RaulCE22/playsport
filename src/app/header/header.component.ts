import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Input() isHome: boolean;
  @Input() title: string;

  constructor(private authService: AuthService, private router: Router) { }

  onLogout() {
    this.authService.logout();
  }
  onBack() {
    this.router.navigate(['home']);
  }
}
