import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reparation } from 'src/app/entities/reparation';
import { ReparationService } from 'src/app/services/reparation-service';

@Component({
  selector: 'app-update-reparation',
  templateUrl: './update-reparation.component.html',
  styleUrls: ['./update-reparation.component.css']
})
export class UpdateReparationComponent implements OnInit {

  id: number;
  reparation: Reparation;

  constructor(private route: ActivatedRoute,private router: Router,
    private reparationService: ReparationService) { }

  ngOnInit() {
    this.reparation = new Reparation();

    this.id = this.route.snapshot.params['id'];
    
    this.reparationService.getReparation(this.id)
      .subscribe(data => {
        console.log(data)
        this.reparation = data;
      }, error => console.log(error));
  }

  updateReparation() {
    this.reparationService.updateReparation(this.id, this.reparation)
      .subscribe(data => {
        console.log(data);
        this.reparation = new Reparation();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateReparation();    
  }

  gotoList() {
    this.router.navigate(['/listReparation']);
  }
}
