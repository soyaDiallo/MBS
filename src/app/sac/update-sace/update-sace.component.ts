import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sac } from 'src/app/entities/sac';
import { MachineService } from 'src/app/services/machine-service';
import { SacService } from 'src/app/services/sac-service';

@Component({
  selector: 'app-update-sace',
  templateUrl: './update-sace.component.html',
  styleUrls: ['./update-sace.component.css']
})
export class UpdateSaceComponent implements OnInit {

  id: number;
  sac: Sac;

  constructor(private route: ActivatedRoute,private router: Router,
    private sacservice: SacService) { }

  ngOnInit() {
    this.sac = new Sac();

    this.id = this.route.snapshot.params['id'];
    
    this.sacservice.getSac(this.id)
      .subscribe(data => {
        console.log(data)
        this.sac = data;
      }, error => console.log(error));
  }

  updateSac() {
    this.sacservice.updateSac(this.id, this.sac)
      .subscribe(data => {
        console.log(data);
        this.sac = new Sac();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateSac();    
  }

  gotoList() {
    this.router.navigate(['/listSac']);
  }

}
