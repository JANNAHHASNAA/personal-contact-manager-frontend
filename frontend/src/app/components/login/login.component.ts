import { Component } from '@angular/core';

import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.services';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'], 
  standalone: true,
  imports: [FormsModule, RouterModule]
})
export class LoginComponent {
  email = '';
  password = '';
  message = '';

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    this.auth.login({ email: this.email, password: this.password })
      .subscribe({
        next: (res: any) => {
          this.auth.saveToken(res.token);
          this.router.navigate(['/contacts']);
        },
        error: err => this.message = err.error.message || 'Error'
      });
  }
}
