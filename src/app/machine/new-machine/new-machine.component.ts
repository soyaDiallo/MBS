import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Machine } from 'src/app/entities/machine';
import { MachineService } from 'src/app/services/machine-service';

@Component({
  selector: 'app-new-machine',
  templateUrl: './new-machine.component.html',
  styleUrls: ['./new-machine.component.css']
})
export class NewMachineComponent implements OnInit {

  machine: Machine = new Machine();
  submitted = false;

  constructor(private machineService: MachineService,
    private router: Router) { }

  ngOnInit() {
  }

  newEmployee(): void {
    this.submitted = false;
    this.machine = new Machine();
  }

  save() {
    this.machineService
    .createMachine(this.machine).subscribe(data => {
      console.log(data)
      this.machine = new Machine();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/listMachine']);
  }
}
