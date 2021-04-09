import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sac } from 'src/app/entities/sac';
import { SacService } from 'src/app/services/sac-service';

@Component({
  selector: 'app-list-sac',
  templateUrl: './list-sac.component.html',
  styleUrls: ['./list-sac.component.css']
})
export class ListSacComponent implements OnInit {

  searchValue: String;
  sacs:Sac[];
  constructor(private http:HttpClient,private sacService:SacService, private router:Router) {  }

  
  ngOnInit() {
    this.loadData();
  }

  loadData(){
    this.sacService.getAllSac().subscribe((data=>{this.sacs=data['_embedded']['sacs'];}));
  }

  deleteSac(id:number){
    this.sacService.deleteSac(id).subscribe(
      data=>{
        console.log(data);
        this.loadData();
      },
      error=>{
        console.log(error);
      }
    );
  }

  updateSac(id: number){
    this.router.navigate(['updateSac', id]);
  }
  detailSac(id: number){
    this.router.navigate(['detailSac', id]);
  }

}
