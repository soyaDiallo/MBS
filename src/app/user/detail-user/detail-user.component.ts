import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/entities/client';
import { Employe } from 'src/app/entities/employe';
import { UserService } from 'src/app/services/user-service';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent implements OnInit {

  id: number;
  user: Employe;
  client:Client;
  constructor(private route: ActivatedRoute,private router: Router,
    private userService: UserService) { }

  ngOnInit() {
    this.user = new Employe();
    this.client= new Client();
    this.id = this.route.snapshot.params['id'];
    this.userService.getUserClient(this.id).subscribe(data=>{this.client=data})
    this.userService.getUser(this.id)
      .subscribe(data => {
        console.log(data)
        this.user = data;
      }, error => console.log(error));
  }

}
