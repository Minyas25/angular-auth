import { Component } from '@angular/core';
import { User } from '../entities';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user:User = {email:'', password:''};
  feedback = ''
  constructor(private authService:AuthService){}

  onSubmit() {
    this.authService.addUser(this.user).subscribe({
      complete:() => this.feedback ='Registration complete.',
      error: () => this.feedback = 'User already exists'
    });
  }

}
