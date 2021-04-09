import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Machine } from 'src/app/entities/machine';
import { MachineService } from 'src/app/services/machine-service';

@Component({
  selector: 'app-list-machine',
  templateUrl: './list-machine.component.html',
  styleUrls: ['./list-machine.component.css']
})
export class ListMachineComponent implements OnInit {

  searchValue: String;
  machines:Machine[];
  constructor(private http:HttpClient,private machineService:MachineService, private router:Router) {  }
  
  ngOnInit() {
    this.loadData();
  }

  loadData(){
    this.machineService.getAllMachine().subscribe((data=>{this.machines=data['_embedded']['machines'];}));
  }

  deleteMachine(id:number){
    this.machineService.deleteMachine(id).subscribe(
      data=>{
        console.log(data);
        this.loadData();
      },
      error=>{
        console.log(error);
      }
    );
  }

  updateMachine(id: number){
    this.router.navigate(['updateMachine', id]);
  }
  detailMachine(id: number){
    this.router.navigate(['detailMachine', id]);
  }

}
