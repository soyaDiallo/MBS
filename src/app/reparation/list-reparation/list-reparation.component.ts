import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Machine } from 'src/app/entities/machine';
import { Reparation } from 'src/app/entities/reparation';
import { ReparationService } from 'src/app/services/reparation-service';

@Component({
  selector: 'app-list-reparation',
  templateUrl: './list-reparation.component.html',
  styleUrls: ['./list-reparation.component.css']
})
export class ListReparationComponent implements OnInit {

  searchValue: String;
  reparations:Reparation[];
  machine:Machine;
  constructor(private http:HttpClient,private reparationService:ReparationService, private router:Router) {  }
  
  ngOnInit() {
    this.loadData();
  }

  loadData(){
    this.reparationService.getAllReparation().subscribe((data=>{
      this.reparations=data['_embedded']['reparations'];
      this.reparations.forEach(r=>{
        this.reparationService.getReparationMachine(r.id).subscribe(data=>{
          this.machine=data;
          r.machine=this.machine.num;
        },err=>{console.log("il y'a des reparations qui n'ont pas de machines ")});
      });
    }));
  }

  deleteReparation(id:number){
    this.reparationService.deleteReparation(id).subscribe(
      data=>{
        console.log(data);
        this.loadData();
      },
      error=>{
        console.log(error);
      }
    );
  }

  updateReparation(id: number){
    this.router.navigate(['updateReparation', id]);
  }
  detailReparation(id: number){
    this.router.navigate(['detailReparation', id]);
  }
}
