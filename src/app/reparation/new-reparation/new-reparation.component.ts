import { Machine } from 'src/app/entities/machine';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reparation } from 'src/app/entities/reparation';
import { ReparationService } from 'src/app/services/reparation-service';
import { MachineService } from 'src/app/services/machine-service';

@Component({
  selector: 'app-new-reparation',
  templateUrl: './new-reparation.component.html',
  styleUrls: ['./new-reparation.component.css']
})
export class NewReparationComponent implements OnInit {

  reparation: Reparation = new Reparation();
  submitted = false;
  machines: Machine[];

  constructor(private reparationService: ReparationService,
    private router: Router, private machineService: MachineService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.machineService.getAllMachine().subscribe(data => {
      this.machines = data['_embedded']['machines'];
    });
  }

  save() {
    this.machineService.getMachine(Number(this.reparation.machine)).subscribe(data => {
      console.log(this.reparation);
      let date = this.reparation.date_reparation;
      let motif = this.reparation.motif;
      this.reparation = new Reparation();
      this.reparation.machine = data;
      this.reparation.motif = motif;
      this.reparation.date_reparation=date;

      this.reparationService
        .createReparation(this.reparation).subscribe(data => {
          this.gotoList();
        },
          error => console.log(error));

    });

  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/listReparation']);
  }
}
