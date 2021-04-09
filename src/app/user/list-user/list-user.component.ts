import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employe } from 'src/app/entities/employe';
import { UserService } from 'src/app/services/user-service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  searchValue: String;
  users:Employe[];
  constructor(private http:HttpClient,private userService:UserService, private router:Router) {  }
  
  ngOnInit() {
    this.loadData();
  }

  loadData(){
    this.userService.getAllUser().subscribe((data=>{this.users=data['_embedded']['employes'];}));
  }

  deleteUser(id:number){
    this.userService.deleteUser(id).subscribe(
      data=>{
        console.log(data);
        this.loadData();
      },
      error=>{
        console.log(error);
      }
    );
  }

  updateUser(id: number){
    this.router.navigate(['updateUser', id]);
  }
  detailUser(id: number){
    this.router.navigate(['detailUser', id]);
  }

}
