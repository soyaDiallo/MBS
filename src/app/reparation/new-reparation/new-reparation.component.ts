import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reparation } from 'src/app/entities/reparation';
import { ReparationService } from 'src/app/services/reparation-service';

@Component({
  selector: 'app-new-reparation',
  templateUrl: './new-reparation.component.html',
  styleUrls: ['./new-reparation.component.css']
})
export class NewReparationComponent implements OnInit {

  reparation: Reparation = new Reparation();
  submitted = false;

  constructor(private reparationService: ReparationService,
    private router: Router) { }

  ngOnInit() {
  }

  save() {
    this.reparationService
    .createReparation(this.reparation).subscribe(data => {
      console.log(data)
      this.reparation = new Reparation();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/listReparation']);
  }
}
