import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Machine } from 'src/app/entities/machine';
import { ClientService } from 'src/app/services/client-service';
import { MachineService } from 'src/app/services/machine-service';

@Component({
  selector: 'app-update-machine',
  templateUrl: './update-machine.component.html',
  styleUrls: ['./update-machine.component.css']
})
export class UpdateMachineComponent implements OnInit {

  id: number;
  machine: Machine;

  constructor(private route: ActivatedRoute,private router: Router,
    private machineService: MachineService) { }

  ngOnInit() {
    this.machine = new Machine();

    this.id = this.route.snapshot.params['id'];
    
    this.machineService.getMachine(this.id)
      .subscribe(data => {
        console.log(data)
        this.machine = data;
      }, error => console.log(error));
  }

  updateClient() {
    this.machineService.updateMachine(this.id, this.machine)
      .subscribe(data => {
        console.log(data);
        this.machine = new Machine();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateClient();    
  }

  gotoList() {
    this.router.navigate(['/listMachine']);
  }

}
