import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Machine } from 'src/app/entities/machine';
import { MachineService } from 'src/app/services/machine-service';

@Component({
  selector: 'app-detail-machine',
  templateUrl: './detail-machine.component.html',
  styleUrls: ['./detail-machine.component.css']
})
export class DetailMachineComponent implements OnInit {

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
}
