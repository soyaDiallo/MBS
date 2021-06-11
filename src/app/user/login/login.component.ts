import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  message: any

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }

  connexion() {
    /*let resp = this.userService.login(this.username, this.password);
    resp.subscribe(data => {
      this.message = data;
      this.router.navigate(['/dashboard']);
    });*/
     this.router.navigate(['/dashboard']);
  }
 
}
