import { MachineService } from './../../services/machine-service';
import { Machine } from 'src/app/entities/machine';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reparation } from 'src/app/entities/reparation';
import { ReparationService } from 'src/app/services/reparation-service';

@Component({
  selector: 'app-detail-reparation',
  templateUrl: './detail-reparation.component.html',
  styleUrls: ['./detail-reparation.component.css']
})
export class DetailReparationComponent implements OnInit {

  id: number;
  reparation: Reparation;
  machine:Machine;
  constructor(private route: ActivatedRoute,private router: Router,
    private reparationService: ReparationService,private machineService:MachineService) { }

  ngOnInit() {
    this.reparation = new Reparation();
    this.machine=new Machine();
    this.id = this.route.snapshot.params['id'];
    this.machineService.getMachine(this.id).subscribe(data=>{
      this.machine=data;
    });
    this.reparationService.getReparation(this.id)
      .subscribe(data => {
        console.log(data)
        this.reparation = data;
      }, error => console.log(error));
  }

}
