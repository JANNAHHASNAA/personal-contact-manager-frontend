import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.services';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'], 
  standalone: true,       // add this
  imports: [FormsModule, RouterModule]  // add this so ngModel works
})
export class RegisterComponent {
  name = '';
  email = '';
  password = '';
  message = '';

  constructor(private auth: AuthService, private router: Router) {}

  register() {
    this.auth.register({ name: this.name, email: this.email, password: this.password })
      .subscribe({
        next: (res: any) => {
          this.message = 'Registration successful!';
          this.router.navigate(['/login']);
        },
        error: err => this.message = err.error.message || 'Error'
      });
  }
}
