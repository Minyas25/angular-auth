import { Component } from '@angular/core';
import { User } from '../entities';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user:User = {email:'', password:''};
  repeat = '';
  feedback = '';
  isLogin = false;
  
  constructor(private authService:AuthService, private location:Location){}

  onSubmit() {
    if(!this.isLogin) {

      this.authService.addUser(this.user).subscribe({
        complete:() => {this.feedback ='Registration complete.'; this.isLogin = true},
        error: () => this.feedback = 'User already exists'
      });
    } else {
      this.authService.login(this.user).subscribe({
        complete:() => this.location.back(),
        error: () => this.feedback = 'Credentials error'
      });
    }
  }

}
