import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../../entities/client';
import { ClientService } from '../../services/client-service';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {

  clientList:any;
 
  constructor(private http:HttpClient,private clientService:ClientService, private router:Router) {  }
  
  ngOnInit() {
    //this.http.get('http://localhost:8080/clients').subscribe((data=>{this.clientList=data}));
    //console.log(this.clientList);
    this.loadData();
  }

  loadData(){
    this.clientService.getAllClient().subscribe((data=>{this.clientList=data;}));
  }

  deleteEmploye(id:number){
    this.clientService.deleteClient(id).subscribe(
      data=>{
        console.log(data);
        this.loadData();
      },
      error=>{
        console.log(error);
      }
    );
  }
}
